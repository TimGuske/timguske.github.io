export default function index({users}) {
  return (
    <div>
        <h1>Benutzer</h1>
        <p>Username: {users.username}</p>
        <p>Name: {users.name}</p>
    </div>
  )
}

export async function getStaticProps(context){
    const antwort = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const users = await antwort.json();

    return {
        props: {
            users
        }
    }
}

export async function getStaticPaths(){
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await antwort.json();
    const ids = users.map(user => user.id);

    const paths = ids.map(id => {
        return {params: {id: id.toString()}}
    })

    return {
        paths,
        fallback : false
    }
}
