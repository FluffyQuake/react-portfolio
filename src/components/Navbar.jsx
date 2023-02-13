import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMailBulk} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../assets/logo.png';
import{Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-2 border-pink-600'>
            <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="Logo image" style={{width: '100px'}} />
            </Link>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} >
                            Minust
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} >
                            Kogemus
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} >
                            Projektid
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} >
                            Kontakt
                        </Link>
                    </li>
                </ul>

            {/* burgir */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                            Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            Minust
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                            Kogemus
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500} >
                            Projektid
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                            Kontakt
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[80px] md:w-[142px] md:pr-[7px] lg:pr-[15px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/kaspar-vakkum-8b10b2266" target="_blank">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[80px] md:w-[142px] md:pr-[7px] lg:pr-[15px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/FluffyQuake" target="_blank">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[80px] md:w-[142px] md:pr-[7px] lg:pr-[15px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="vakkumkaspar@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar