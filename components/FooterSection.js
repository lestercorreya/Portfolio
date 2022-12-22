import React from 'react'
import { LinkedIn, GitHub, Phone, Email } from '@mui/icons-material'
import Image from 'next/image'
import logo from '../public/static/images/logo.png'

const FooterSection = () => {
  return (
    <div className='p-5 bg-background md:px-10 md:pt-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-10 flex-1'>
          <div className='font-primary text-primary font-extrabold mb-5 md:text-lg lg:text-xl lg:mb-6'>Social Links</div>
          <div className='flex items-center md:mb-2'>
            <LinkedIn className='text-3xl mr-2' />
            <div className='text-secondary lg:text-lg hover:text-primary cursor-pointer'>github.com/lestercorreya</div>
          </div>
          <div className='flex items-center'>
            <GitHub className='text-3xl mr-2' />
            <div className='text-secondary lg:text-lg hover:text-primary cursor-pointer'>linkedIn.com/in/lester-correya</div>
          </div>
        </div>
        <div className='mb-6 flex-1'>
          <div className='font-primary text-primary font-extrabold mb-5 md:text-lg lg:text-xl lg:mb-6'>Contact</div>
          <div className='flex items-center md:mb-2'>
            <Phone className='text-3xl mr-2' />
            <div className='text-secondary lg:text-lg hover:text-primary cursor-pointer'>+91 9740588747</div>
          </div>
          <div className='flex items-center'>
            <Email className='text-3xl mr-2' />
            <div className='text-secondary lg:text-lg hover:text-primary cursor-pointer'>lestercorreya@gmail.com</div>
          </div>
        </div>
      </div>
      <div className='h-0.5 bg-primary mb-6'></div>
      <div className='flex'>
        <div className='flex items-center'>
          <Image src={logo} alt="logo" className='mr-2 w-4 md:w-6' />
          <div className='font-zenDots text-xs md:text-base'>LESTER CORREYA</div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection