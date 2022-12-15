import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'

const ResumeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div className='min-h-regularScreen bg-background flex flex-col relative items-center justify-center' ref={ref}>
      <div className='px-20 w-full flex justify-center flex-col mt-10 transition-all duration-500 ease-in delay-300' style={{ transform: inView ? "translateY(0)" : "translateY(200px)", opacity: inView ? "1" : "0" }}>
        <div className='flex justify-between items-center'>
          <div className='font-primary text-primary text-5xl font-extrabold mb-4'>My</div>
          <button className='text-xl px-5 py-2 border-blue-300 border-2 text-primary'>Download</button>
        </div>
        <div className='font-primary text-primary text-5xl font-extrabold flex justify-end'>Resume</div>
      </div>
      <div className='flex-1 justify-center items-center flex px-2 drop-shadow-2xl z-10' style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}>
        <Image src="/static/images/resume.jpg" width={500} height={500} alt="Resume" className='w-full transition-all duration-500 ease-in' style={{ transform: inView ? "rotateY(0)" : "rotateY(90deg)" }} />
      </div>
    </div>
  )
}

export default ResumeSection