import React, { useState } from 'react'
import { FaBell, FaChevronDown, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Logo } from '../assets'
interface NavbarProp {
    isAuthPage?: boolean 
    authButton?: () => React.ReactElement
    className?: string
}

const Navbar = ({isAuthPage, authButton, className}: NavbarProp) => {

    const [hasScrolled, setHasScrolled] = useState<boolean>(false)

    window.onscroll = () => {
        setHasScrolled(window.pageYOffset === 0? false: true)

        return () => window.onscroll = null
    }


  return (
    <nav className={`fixed top-0 padding py-4 ${hasScrolled? 'bg-black/90' : 'bg-gradient-to-b from-black/70 to-black/5'} w-screen ${className}`}>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
                <img src={Logo} alt="logo" className='h-[3rem]'/>
                {
                    !isAuthPage &&
                    <ul className='lg:flex items-center gap-5 text-md hidden'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-slate-300 transition-all duration-300 hover:text-white'>
                            <Link to='/'>TV Shows</Link>
                        </li>
                        <li className='text-slate-300 transition-all duration-300 hover:text-white'>
                            <Link to='/'>Movies</Link>
                        </li>
                        <li className='text-slate-300 transition-all duration-300 hover:text-white'>
                            <Link to='/'>Latest</Link>
                        </li>
                        <li className='text-slate-300 transition-all duration-300 hover:text-white'>
                            <Link to='/'>My List</Link>
                        </li>
                        <li className='text-slate-300 transition-all duration-300 hover:text-white'>
                            <Link to='/'>Browse By Language</Link>
                        </li>
                    </ul>
                }
            </div>

            {
                !isAuthPage &&
                <div className='flex gap-4 items-center'>
                    <span className='text-xl'>
                        <FaSearch />
                    </span>
                    <p>DVD</p>
                    <span className='text-xl relative'>
                        <p className='h-[15px] w-[15px] rounded-full bg-red-500 text-white flex justify-center items-center text-xs absolute -top-1 -right-1'>2</p>
                        <FaBell />
                    </span>
                    <span className='text-xl flex items-center gap-2'>
                        <div className='bg-green-500 rounded-lg h-[2rem] w-[2rem] cursor-pointer'></div>
                        <FaChevronDown /> 
                    </span>
                </div>
            }

            {
                isAuthPage &&
                <div className=''>
                    {authButton && authButton()}
                </div>
            }
        </div>
    </nav>
  )
}

export default Navbar