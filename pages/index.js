import Head from 'next/head'
import prisma from 'lib/prisma'
import { getItems } from 'lib/data'

export default function Home({ restaurants, hotels, thingsToDo}) {
  return (
    <div>
      <Head>
        <title>The best in Town</title>
        <meta name ='description' content='Local Reviews' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-center'>
        <h1 className='mt-10 font-extrabold text-2xl'>The Best in Town</h1>

        <div className='flex flex-col md:grid md:grid-cols-3'>
          {restaurants && (
          <div>
            <h2 className='mt-10 font-bold'>Restaurants</h2>

            <ol className='mt-4 list-inside list-decimal'>
              {restaurants.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ol>
          </div>
          )}

          {hotels && (
          <div>
            <h2 className='mt-10 font-bold'>Hotels</h2>

            <ol className='mt-4 list-inside list-decimal'>
              {hotels.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ol>
          </div>
          )}
          
          {thingsToDo && (
          <div>
            <h2 className='mt-10 font-bold'>Things To Do</h2>

            <ol className='mt-4 list-inside list-decimal'>
              {thingsToDo.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ol>
          </div>
          )}         
        </div>
      </div>
    </div>
  )
}



export async function getServerSideProps() {
  const restaurants = await getItems(prisma, 'restaurants')
  const hotels = await getItems(prisma, 'hotel')
  const thingsToDo = await getItems(prisma, 'thing-to-do')
  console.log(thingsToDo)

  return {
    props: {
      restaurants,
      hotels,
      thingsToDo,
    }
  }
}
