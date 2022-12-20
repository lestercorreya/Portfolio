import React from 'react'
import Image from 'next/image'
import profileImage from '../public/static/images/profile-image.jpg'

const FixedBackground = () => {
  return (
    <div className='fixed top-10 w-full -z-10 flex justify-center items-center md:justify-end lg:px-48'>
      <Image src={profileImage} priority alt='Profile' className='rounded-full w-4/6 md:w-auto' />
    </div>
  )
}

export default FixedBackground