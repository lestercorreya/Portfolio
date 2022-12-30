import React from 'react'
import Image from 'next/image'
import profileImage from '../public/static/images/profile-image.jpg'
import { KeyboardArrowUp } from '@mui/icons-material'

const FixedBackground = (props) => {
  const { homeInView, handleSectionHeaderClick } = props

  return (
    <div>
      <div className='fixed top-10 w-full -z-10 flex justify-center items-center md:justify-end lg:px-48'>
        <Image src={profileImage} priority alt='Profile' className='rounded-full w-4/6 md:w-auto' />
      </div>
      <div className='fixed bottom-10 right-10 z-20 rounded-full p-2 bg-primary shadow-lg shadow-secondary hover:p-3 hover:right-9 hover:bottom-9 cursor-pointer transition-opacity' style={{ opacity: homeInView ? "0" : "1", pointerEvents: homeInView ? "none" : "all" }} onClick={() => handleSectionHeaderClick("home")}>
        <KeyboardArrowUp className='text-white text-3xl' />
      </div>
    </div>
  )
}

export default FixedBackground