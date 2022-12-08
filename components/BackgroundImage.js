import React from 'react'

const BackgroundImage = () => {
  return (
    <div className='absolute -z-10 w-full h-400' style={{ transform: 'translateZ(-20px) scale(4)' }}>
      <div className='w-400 h-400 rounded-full bg-gradient-to-r from-blue-100 to-white absolute -top-160 -right-160'></div>
      <div className='w-400 h-400 rounded-full bg-gradient-to-l from-blue-100 to-white absolute -bottom-160 -left-160'></div>
    </div>
  )
}

export default BackgroundImage