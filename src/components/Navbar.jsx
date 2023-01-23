import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/shared/logo.svg'
import menuIcon from '../assets/shared/icon-hamburger.svg'
import closeIcon from '../assets/shared/icon-close.svg'

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const handleToggle = () => setShowMenu(!showMenu);

    return (
        <header className='w-full z-50 absolute flex justify-between items-center p-[1.5rem] lg:p-0 lg:py-5 lg:mt-5'>

            <div className="logo md:ml-[2.5rem]">
                <img src={logo} alt="Logo" />
            </div>

            <button className="mobile-menu cursor-pointer md:hidden" onClick={handleToggle}>
                <img src={menuIcon} alt="menu" />
            </button>

            <motion.nav
                key={showMenu}
                className={` ${showMenu ? 'block' : 'hidden'} absolute top-0 -right-20 h-screen w-[72%] bg-white bg-opacity-[0.04] backdrop-blur-[40.7742px] p-[2.125rem] md:right-0 md:w-[60%] md:block md:p-0 md:h-[6rem]`}

                animate={{ right: 0 }}
                transition={{ type: 'keyframes' }}
            >

                <button className="block w-fit ml-auto cursor-pointer md:hidden" onClick={handleToggle}>
                    <img src={closeIcon} alt="close" className='w-[19px]' />
                </button>

                <ul className='nav-text text-[1.3rem] w-fit m-auto flex flex-col gap-y-[2rem] mt-10 md:relative md:flex-row md:justify-around md:items-center md:w-full md:h-full md:gap-y-0 md:mt-0 md:px-5 md:text-[1.2rem]'>
                    <li onClick={handleToggle} className={location.pathname === '/' ? 'active-nav' : ''}>
                        <Link to='/'><span className='nav-number pr-2 md:hidden lg:inline'>00</span> Home</Link>
                    </li>
                    <li onClick={handleToggle} className={location.pathname === '/destination' ? 'active-nav' : ''}>
                        <Link to='/destination'><span className='nav-number pr-2 md:hidden lg:inline'>01</span> Destination</Link>
                    </li>
                    <li onClick={handleToggle} className={location.pathname === '/crew' ? 'active-nav' : ''}>
                        <Link to='/crew'><span className='nav-number pr-2 md:hidden lg:inline'>02</span> Crew</Link>
                    </li>
                    <li onClick={handleToggle} className={location.pathname === '/technology' ? 'active-nav' : ''}>
                        <Link to='/technology'><span className='nav-number pr-2 md:hidden lg:inline'>03</span> Technology</Link>
                    </li>
                </ul>
            </motion.nav>
        </header>
    )
}
