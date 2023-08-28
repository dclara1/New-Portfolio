import React from 'react'
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#13005A] flex justify-center items-center p-4'>
      <AnimationOnScroll animateIn=" animate__fadeInUpBig ">
        <form action="https://formspree.io/f/xknlgapg" method='POSTS' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>   
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>  Submit the form below so we can connect. </p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' rows="10" name="message" placeholder='Type your message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'> Let's chat</button>



        </form>
        </AnimationOnScroll>
    </div>
  )
}

export default Contact
