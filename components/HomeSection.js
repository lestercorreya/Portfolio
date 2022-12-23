import React from 'react';
import { EmailOutlined, PhoneOutlined, LocationCity } from '@mui/icons-material'

const HomeSection = (props) => {
  const { setRefs } = props

  return (
    <div className='w-screen pt-20' ref={(node) => setRefs(node, "home")}>
      <div className='flex flex-col md:flex-row-reverse p-5 md:px-10 lg:px-48 min-h-regularScreen md:p-6'>
        <div className='flex-1'></div>
        <div className='flex-1 flex justify-center flex-col'>
          <div className='text-sm mb-4 text-secondary md:text-base lg:text-lg'>
            HELLO, MY NAME IS
          </div>
          <div className='w-12 h-0.5 mb-10 bg-secondary lg:mb-16'></div>
          <div className='text-5xl mb-4 font-primary font-extrabold lg:text-7xl'>Lester Correya</div>
          <div className='text-xl text-secondary mb-10 font-primary font-extrabold md:text-2xl lg:text-4xl lg:mb-20'>Web Developer</div>
          <div className='mb-4 text-lg md:text-xl'><span className='mr-2 text-primary'><EmailOutlined /></span> lestercorreya@gmail.com</div>
          <div className='mb-4 text-lg md:text-xl'><span className='mr-2 text-primary'><PhoneOutlined /></span>+91 9740588747</div>
          <div className='text-lg md:text-xl'><span className='mr-2 text-primary'><LocationCity /></span>Melbourne, Victoria State, Australia</div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection