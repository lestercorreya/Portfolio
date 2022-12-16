import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'

const ResumeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className='min-h-regularScreen bg-background flex flex-col relative items-center justify-center py-16 lg:flex-row' ref={ref}>
      <div className='flex-1 px-20 flex justify-center flex-col mb-16 transition-all duration-500 ease-in delay-300 w-full items-center' style={{ transform: inView ? "translateY(0)" : "translateY(200px)", opacity: inView ? "1" : "0" }}>
        <div className='w-full md:w-1/2 lg:w-1/2'>
          <div className='flex justify-between items-center'>
            <div className='font-primary text-primary text-5xl font-extrabold mb-4 md:text-6xl lg:text-7xl'>My</div>
            <button className='text-xl px-5 py-2 border-blue-300 border-2 text-primary md:text-3xl'>Download</button>
          </div>
          <div className='font-primary text-primary text-5xl font-extrabold flex justify-end md:text-6xl lg:text-7xl'>Resume</div>
        </div>
      </div>
      <div className='flex-1 justify-center items-center flex px-2 drop-shadow-xl z-10 relative' style={{ perspective: "100px" }}>
        <Image src="/static/images/resume.jpg" width={500} height={500} alt="Resume" className='w-full transition-all duration-500 ease-in' style={{ transform: inView ? "translateZ(0)" : "translateZ(-10px)" }} />
        <div className='w-full h-full absolute' style={{ backdropFilter: inView ? "" : "grayscale(90%)" }}></div>
      </div>
    </div>
  )
}

export default ResumeSection