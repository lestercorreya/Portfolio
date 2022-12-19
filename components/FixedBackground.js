import React from 'react'
import Image from 'next/image'

const FixedBackground = () => {
  return (
    <div className='fixed top-10 w-full -z-10 flex justify-center items-center md:justify-end lg:px-48'>
      <Image src="/static/images/profile-image.jpg" width={500} height={780} alt="Profile Picture" className='rounded-full w-4/6 md:w-auto' priority={true} />
    </div>
  )
}

export default FixedBackground