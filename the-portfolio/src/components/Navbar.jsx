import React,{useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
        <div className='hover:bg-pink-600 p-1'>
        <Link to='home' smooth={true} duration={500} >
            <img src={Logo} alt="logo img" style={{width: '50px'}} />
        </Link>
        </div>

        {/* Menu */}
            <ul className='hidden md:flex'>
                <li className=' hover:text-pink-600'><Link to='home' smooth={true} duration={500} >
          Home
        </Link></li>
                <li className=' hover:text-pink-600'><Link to='about' smooth={true} duration={500} >
          About
        </Link></li>
                <li className=' hover:text-pink-600'><Link to='skills' smooth={true} duration={500} >
          Skills
        </Link></li>
                <li className=' hover:text-pink-600'><Link to='projects' smooth={true} duration={500} >
          Projects
        </Link></li>
                <li className=' hover:text-pink-600'><Link to='contact' smooth={true} duration={500} >
          Contact
        </Link></li>
            </ul>
        

        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'> 
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>


        {/* Mobile Menu */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex justify-center items-center '}>
            <ul>
                <li className='py-6 text-4xl  hover:text-pink-600'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500} >
          Home
        </Link></li>
                <li className='py-6 text-4xl  hover:text-pink-600'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500} >
          About
        </Link></li>
                <li className='py-6 text-4xl  hover:text-pink-600'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
          Skills
        </Link></li>
                <li className='py-6 text-4xl  hover:text-pink-600'>
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500} >
          Projects
        </Link></li>
                <li className='py-6 text-4xl  hover:text-pink-600'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
          Contact
        </Link></li>
            </ul>
        </div>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/dclara1/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className=' flex justify-between items-center w-full text-gray-300' href="https://github.com/dclara1">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

            </ul>

        </div>

    </div>
  )
}

export default Navbar