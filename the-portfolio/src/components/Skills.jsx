import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#13005A] text-gray-300'>
        
        
{/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
        <AnimationOnScroll animateIn=" animate__fadeInBottomRight ">  
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'> These are the technologies I have worked with:</p>
            </AnimationOnScroll>
        </div>


{/* icons */}
<AnimationOnScroll animateIn=" animate__fadeInBottomRight ">
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>   
                <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                <p>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>   
                <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                <p>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>   
                <img className='w-20 mx-auto' src={JavaScript} alt="javascript Icon" />
                <p>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>   
                <img className='w-20 mx-auto' src={reactImg} alt="react Icon" />
                <p>React</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>   
                <img className='w-20 mx-auto' src={Node} alt="Nodejs Icon" />
                <p>NodeJS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>   
                <img className='w-20 mx-auto' src={GitHub} alt="github Icon" />
                <p>GitHub</p>
            </div>
        </div>
        </AnimationOnScroll>
    </div>

    </div>
  )
}

export default Skills