import React from 'react';
import { EmailOutlined, PhoneOutlined } from '@mui/icons-material'
import Image from 'next/image'

const HomeSection = () => {
  return (
    <div className='bg-home lg:bg-home-desktop w-screen h-screen bg-no-repeat pt-20 bg-cover lg:bg-contain'>
      <div className='flex flex-col h-full md:flex-row-reverse p-5 lg:px-48'>
        <div className='flex-1 flex justify-center items-center'>
          <Image src="/static/images/profile-example.jpg" width={500} height={500} alt="Profile Picture" className='w-full rounded-full' />
        </div>
        <div className='flex-1 flex justify-center flex-col'>
          <div className='text-sm mb-4 text-secondary md:text-base lg:text-lg'>
            HELLO, MY NAME IS
          </div>
          <div className='w-12 h-0.5 mb-10 bg-secondary lg:mb-16'></div>
          <div className='text-5xl mb-4 font-primary font-extrabold lg:text-7xl'>Lester Correya</div>
          <div className='text-xl text-secondary mb-10 font-primary font-extrabold md:text-2xl lg:text-4xl lg:mb-20'>Web Developer</div>
          <div className='mb-2 text-lg md:text-xl'><span className='mr-2 text-primary'><EmailOutlined /></span> lestercorreya@gmail.com</div>
          <div className='mb-2 text-lg md:text-xl'><span className='mr-2 text-primary'><PhoneOutlined /></span>+91 9740588747</div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection