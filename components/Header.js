import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 px-48 flex justify-between items-center'>
      <div className="flex justify-center items-center">
        <Image src="/static/images/logo.png" alt="logo" width="32" height="32" className='mr-2' />
        <div className='font-philosopher text-xl'>Lester Correya</div>
      </div>
      <ul className='flex text-lg'>
        <li className='ml-10'>HOME</li>
        <li className='ml-10'>ABOUT</li>
        <li className='ml-10'>PROJECTS</li>
        <li className='ml-10'>CV</li>
        <li className='ml-10'>CONTACT</li>
      </ul>
    </div>
  )
}

export default Header