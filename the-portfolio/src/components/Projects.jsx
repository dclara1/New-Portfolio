import React from 'react'
import WIP from '../assets/WIP.png'
import WeatherApp from '../assets/WeatherApp.png'
import Calc from '../assets/Calc.png'
import Portfolio from '../assets/Portfolio.png'
import AnimateB from '../assets/AnimateB.png'
import '../index.css'
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';



const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#03001C]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
            <AnimationOnScroll animateIn=" animate__fadeInBottomLeft ">
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-3'> Check out some of my recent work.</p>
</AnimationOnScroll>

            </div>
{/* Container */}
<AnimationOnScroll animateIn=" animate__fadeInBottomLeft ">

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
    {/* Grid Item */}

    
{/* CARD 1 */}
                <div style={{backgroundImage: `url(${WeatherApp})` }}   
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto projectstyle'>

        {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    HTML CSS JS API application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://dclara1.github.io/WeatherApp/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/dclara1/WeatherApp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* END CARD 1 */}

{/* CARD 2 */}
                <div style={{backgroundImage: `url(${Calc})` }}   
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto projectstyle'>

        {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    HTML CSS JS Application
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://codepen.io/dlara1994/pen/bGQQROb">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://codepen.io/dlara1994/pen/bGQQROb">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* END CARD 2 */}


{/* CARD 3 */}
                <div style={{backgroundImage: `url(${Portfolio})` }}   
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto projectstyle'>

        {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    HTML CSS JS Website
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://dclara1.github.io/projectwebsite5/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/dclara1/projectwebsite5">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* END CARD 3 */}



{/* CARD 4 */}
                <div style={{backgroundImage: `url(${AnimateB})` }}   
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto projectstyle'>

        {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    Coming Soon!
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://codepen.io/dlara1994/pen/jOQaVQX">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://codepen.io/dlara1994/pen/jOQaVQX">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* END CARD 4 */}



{/* CARD 5 */}
                <div style={{backgroundImage: `url(${WIP})` }}   
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto projectstyle'>

        {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    Coming Soon!
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* END CARD 5 */}


{/* CARD 6 */}
                <div style={{backgroundImage: `url(${WIP})` }}   
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto projectstyle'>

        {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    Coming Soon!
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
{/* END CARD 6 */}


            </div>
            </AnimationOnScroll>
        </div>

    </div>
    
  )
}

export default Projects