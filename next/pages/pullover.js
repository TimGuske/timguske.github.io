import Head from 'next/head'
import Image from 'next/image'

export default function pullover() {
  return (
    <div>
      <Head>
        <title>Pullover</title>
      </Head>
        <h1>Pulloverübersicht</h1>
        {
          ['1','2','3','4'].map((path) => {
            return(
              <div key={path}>
                <Image src={`/bilder/${path}.jpeg`} alt='Artikel' width={600} height={600} />
              </div>
            )
          })
        }
    </div>
  )
}
