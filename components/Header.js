import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../public/static/images/logo.png"
import { Menu, Close } from '@mui/icons-material'

const Header = () => {
  const menuItems = [
    "HOME",
    "ABOUT",
    "RESUME",
    "PROJECTS"
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='h-20 px-5 md:px-10 lg:px-48 flex justify-between items-center fixed top-0 w-full z-20 bg-white'>
      <div className="flex justify-center items-center">
        <Image src={logo} priority alt="logo" className='mr-2 w-6 md:w-8' />
        <div className="font-zenDots text-sm md:text-lg">LESTER CORREYA</div>
      </div>
      <div className={`${!isMenuOpen ? "block" : "hidden"} lg:hidden`} onClick={() => setIsMenuOpen(true)}>
        <Menu className='text-3xl' />
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`} onClick={() => setIsMenuOpen(false)}>
        <Close className='text-3xl' />
      </div>
      <ul className={`${isMenuOpen ? "block" : "hidden"} w-full absolute left-0 top-full bg-white lg:hidden`}>
        {menuItems.map((title) => {
          return (
            <li className={`border-b-2 border-gray-100 p-6 md:px-12`} key={title}>{title}</li>
          )
        })}
      </ul>
      <ul className='hidden lg:flex text-lg items-center'>
        {menuItems.map(title => {
          return (
            <li className={`ml-10 px-2 py-1 rounded-lg transition-shadow hover:font-semibold hover:cursor-pointer hover:shadow-lg border-blue-900 hover:text-blue-900 hover:shadow-blue-300`} key={title}>{title}</li>
          )
        })}
      </ul>
    </div >
  )
}

export default Header