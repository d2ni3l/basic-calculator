import React from 'react'
import colorData from './colordata.jsx'
import {useState} from 'react'
import Copymodal from './Copymodal.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AOS } from 'aos';

function ColorGrid() {

    useEffect(() => {
        Aos.init(
            {
                duration: 1000,
                
            }
        )
    }, [])
       
  const [copied, setCopied] = useState(false)
  return (
    <>
    { copied && <Copymodal/>}
    <div className='grid gap-6 grid-cols-4 xs:grid-cols-5 md:grid-cols-10 '>
        {
            colorData.map((color, i) => {
                const {name, value} = color;
                return(
                    <article data-aos='fade-up' key={i}  onClick={() => {navigator.clipboard.writeText(name);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 1400);
                    }} className='cursor-pointer'>

                    <div className={`py-6 px-2 rounded-md  ${value}`}>
                    </div>
                    <h2 className='text-center font-semibold pt-2 text-[#a9b3d2] text-sm tracking-wider'>{name}</h2>
                    </article>
                )
            })
        }
    </div>
    </>
  )
}

export default ColorGrid;