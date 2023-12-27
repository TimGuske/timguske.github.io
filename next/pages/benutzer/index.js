import Link from 'next/link'

export default function index({users}) {
  return (
    <div>
        <h1>Liste der Benutzer</h1>
        {users.map((user)=> [
            <li key={user.id}>
            <Link key={user.id} href={`benutzer/${user.id}`}>
                {user.username}
            </Link>
            </li>
        ])}
    </div>
  )
}
//SSG
/* export async function getStaticProps(){
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await antwort.json();

    return {
        props: {
            users
        }
    }
} */

//SSR
export async function getServerSideProps(){
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await antwort.json();

    return {
        props: {
            users
        }
    }
}
