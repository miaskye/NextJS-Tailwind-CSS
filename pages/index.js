import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
//import {AiFillLinkedIn, AiFillTwitterCircle} from "react-icons/ai";
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mia Skye Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" > 
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className='text-xl'>developedbymiaskye</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}className='cursor-pointer text-2xl'/></li>
              <li><a className=' bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h3 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">Mia Skye</h3>
            <h2 className="text-2xl py-2 md:text-3xl">Front End Developer</h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Ready to start my career as a Front End Dev!</p>
          </div>
          <div className="text-xl flex justify-center gap-16 py-3"> Will put icons here </div> 
          <div className=" mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-auto">
              this will be for image not ugly AI
          </div>
        </section>
      

        <section>
            <div>
              <h3 className="text-3xl py-1 text-gray-800"> Services I Offer</h3>
              <p>Coming Soon </p>
            </div>
            <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600"> Project </h4> 
              <p className="text-gray-800 py-1">Description of Project</p>
              <p className="text-gray-800 py-1">Description of Project</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600"> Project </h4> 
              <p className="text-gray-800 py-1">Description of Project</p>
              <p className="text-gray-800 py-1">Description of Project</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <h4 className="py-4 text-teal-600"> Project </h4> 
              <p className="text-gray-800 py-1">Description of Project</p>
              <p className="text-gray-800 py-1">Description of Project</p>
            </div>
            </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-gray-800"> Portfolio </h3>
            <p>Description</p>
          </div>
          <div>
            image 
          </div>
        </section>

      </main>
      </div> 
  )
}
