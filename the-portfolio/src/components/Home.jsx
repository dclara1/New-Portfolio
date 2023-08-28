import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Spring } from 'react-spring'
import {Link} from 'react-scroll'
import '../index.css'

const Home = () => {
  return (




    <div name='home' className='w-full h-screen bg-[#13005A]'>



        {/* Container */}
        <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'> Hi My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>David Lara</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]S'>I am a web developer specializing in front-end developmentand currently based in Phoenix, Arizona.</p>

            <div>
            <Link to='projects' smooth={true} duration={500} >
                <button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover: border-pink-600'> View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                </button>
                </Link>
            </div>

            <div>
              <img src="https://media.licdn.com/dms/image/D5603AQGg0BB9s931xw/profile-displayphoto-shrink_800_800/0/1682970109304?e=1698883200&v=beta&t=NBz3OTFITbsQypWU-rJxkd1KfBfokKR_Oax4lBAZoL4" alt="profile picture" className='floating' />
            </div>




        </div>



    </div>
  )
}

export default Home