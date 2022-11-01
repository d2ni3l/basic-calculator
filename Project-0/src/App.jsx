import { useState } from 'react'
import  ColorGrid from './ColorGrid.jsx'
function App() {

  return (
    <>
    <header>
      <div className="flex justify-center items-center space-y-4 md:space-y-10 flex-col">
        <h1 className='text-3xl  md:text-6xl font-bold mt-10 md:mt-20'>Color picker 🎨</h1>
        <p className='intro-p text-md md:text-2xl font-semi-bold'>
          Click to choose a color <span className='text-indigo-700 text-3xl'>.</span><span className='text-purple-700 text-3xl'>.</span><span className='text-fuchsia-800 text-3xl'>.</span>
        </p>
      </div>
    </header>
   <main className='pb-12'>
    <section className='mx-6 mt-10 md:mt-20 md:mx-10 lg:mx-20 xl:mx-[20rem]'>
     <ColorGrid/>
     </section>
   </main>
   </>
  )
}

export default App
