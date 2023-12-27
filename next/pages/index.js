import Head from 'next/head'

export default function Home() {
  return (
   <div>
    <Head>
      <title>Home</title>
    </Head>
    <h2>Schöne Rezepte für den Alltag</h2>
    <button type='button' className='btn-small'>Neues Rezept anlegen</button>
    <button className="btn-small">Hilfe</button>
   </div>
  )
}
