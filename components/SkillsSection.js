import React from 'react'
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='p-5 min-h-regularScreen md:flex lg:px-48 bg-white'>
      <div className='mb-20 flex-1' ref={ref}>
        <div className='text-4xl font-primary mb-10 font-extrabold'>Skills</div>
        <div className='md:mr-16'>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>Git</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "90%" : "0", opacity: inView ? "1" : "0" }}>90%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>React JS</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "90%" : "0", opacity: inView ? "1" : "0" }}>90%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>Node JS</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "75%" : "0", opacity: inView ? "1" : "0" }}>75%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>Flutter</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "65%" : "0", opacity: inView ? "1" : "0" }}>65%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>MongoDB</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "75%" : "0", opacity: inView ? "1" : "0" }}>75%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>HTML</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "90%" : "0", opacity: inView ? "1" : "0" }}>90%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>MySQL</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "65%" : "0", opacity: inView ? "1" : "0" }}>65%</div>
            </div>
          </div>
          <div className='mb-6'>
            <div className='text-secondary mb-2'>CSS</div>
            <div className='h-5 rounded-full bg-white'>
              <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: inView ? "90%" : "0", opacity: inView ? "1" : "0" }}>90%</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='text-4xl font-primary mb-10 font-extrabold lg:mb-20'>My Experience</div>
        <div className='mb-16 lg:flex'>
          <div className='mb-5 flex-1 lg:mr-10'>
            <div className='mb-2 font-semibold'>2015-2021</div>
            <div className='h-px bg-slate-300 w-full mb-2'></div>
            <div className='text-secondary'>ACME Company</div>
          </div>
          <div className='flex-2'>
            <div className='text-primary text-xl mb-4 font-semibold'>LEAD UI/UX DESIGNER</div>
            <div className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quia maiores sapiente neque voluptatem accusantium.</div>
            <div className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, suscipit.</div>
            <div className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem!</div>
          </div>
        </div>
        <div className='lg:flex'>
          <div className='mb-5 flex-1 lg:mr-10'>
            <div className='mb-2 font-semibold'>2015-2021</div>
            <div className='h-px bg-slate-300 w-full mb-2'></div>
            <div className='text-secondary'>ACME Company</div>
          </div>
          <div className='flex-2'>
            <div className='text-primary text-xl mb-4 font-semibold'>LEAD UI/UX DESIGNER</div>
            <div className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quia maiores sapiente neque voluptatem accusantium.</div>
            <div className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, suscipit.</div>
            <div className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection