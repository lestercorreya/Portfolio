import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, Close } from '@mui/icons-material'

const Header = () => {
  const menuItems = {
    home: {
      text: "HOME",
      className: "homeMenuItem"
    },
    about: {
      text: "ABOUT",
      className: "aboutMenuItem"
    },
    projects: {
      text: "PROJECTS",
      className: "projectsMenuItem"
    },
    cv: {
      text: "CV",
      className: "cvMenuItem"
    },
    contact: {
      text: "CONTACT",
      className: "contactMenuItem"
    },
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='py-5 px-5 md:px-10 lg:px-48 flex justify-between items-center fixed top-0 w-full z-10'>
      <div className="flex justify-center items-center">
        <Image src="/static/images/logo.png" alt="logo" width="32" height="32" className='mr-2 w-6 md:w-8' />
        <div className="font-zenDots text-sm md:text-lg">LESTER CORREYA</div>
      </div>
      <div className={`${!isMenuOpen ? "block" : "hidden"} lg:hidden`} onClick={() => setIsMenuOpen(true)}>
        <Menu className='text-3xl' />
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`} onClick={() => setIsMenuOpen(false)}>
        <Close className='text-3xl' />
      </div>
      <ul className={`${isMenuOpen ? "block" : "hidden"} w-full absolute left-0 top-full bg-white lg:hidden`}>
        {Object.keys(menuItems).map((item, index) => {
          return (
            <li className={`border-b-2 ${index === 0 && "border-t-2"} border-gray-100 p-6 md:px-12`} key={menuItems[item].text}>{menuItems[item].text}</li>
          )
        })}
      </ul>
      <ul className='hidden lg:flex text-lg items-center'>
        {Object.keys(menuItems).map(item => {
          return (
            <li className={`ml-10 px-2 py-1 rounded-lg transition-shadow hover:font-semibold hover:cursor-pointer hover:shadow-lg ${menuItems[item].className}`} key={menuItems[item].text}>{menuItems[item].text}</li>
          )
        })}
      </ul>
    </div >
  )
}

export default Header