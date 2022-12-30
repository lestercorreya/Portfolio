import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import resumeImage from '../public/static/images/resume.jpg'

const ResumeSection = (props) => {
  const { setRefs, resumeInView } = props

  const [onceInView, setOnceInView] = useState(false)

  useEffect(() => {
    if (!onceInView && resumeInView) {
      setOnceInView(true)
    }
  }, [resumeInView])

  return (
    <div className='px-5 min-h-regularScreen bg-white flex flex-col relative items-center justify-center py-16 lg:flex-row lg:px-48 md:px-20' ref={(node) => setRefs(node, "resume")}>
      <div className='flex-1 px-16 flex justify-center flex-col mb-16 transition-all duration-500 ease-in delay-300 w-full items-center' style={{ transform: onceInView ? "translateY(0)" : "translateY(200px)", opacity: onceInView ? "1" : "0" }}>
        <div className='w-full md:w-1/2 lg:w-7/12'>
          <div className='flex justify-between items-center'>
            <div className='font-primary text-primary text-5xl font-extrabold mb-4 md:text-6xl lg:text-7xl'>My</div>
            <a className='text-xl px-5 py-2 border-blue-300 border-2 text-primary md:text-3xl relative after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-primary after:transition-width after:-z-10 hover:text-white cursor-pointer' href='/static/files/Resume.pdf' download>Download</a>
          </div>
          <div className='font-primary text-primary text-5xl font-extrabold flex justify-end md:text-6xl lg:text-7xl'>Resume</div>
        </div>
      </div >
      <div className='flex-1 justify-center items-center flex drop-shadow-xl z-10 relative' style={{ perspective: "100px" }}>
        <Image src={resumeImage} alt="Resume" className='w-full transition-all duration-500 ease-in' style={{ transform: onceInView ? "translateZ(0)" : "translateZ(-10px)" }} />
        <div className='w-full h-full absolute' style={{ backdropFilter: onceInView ? "" : "grayscale(90%)" }}></div>
      </div>
    </div >
  )
}

export default ResumeSection