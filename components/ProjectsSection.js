import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [playVideo, setPlayVideo] = useState(false)
  const [key, setKey] = useState(1)

  return (
    <div className='min-h-regularScreen px-5 py-10 md:px-10 lg:px-48 bg-background' ref={ref}>
      <div className='text-5xl font-extrabold text-primary font-primary mb-20 md:text-6xl lg:text-7xl lg:mb-36'>My Projects</div>
      <div className='text-secondary text-lg mb-20 md:text-xl md:w-4/5 md:ml-20 lg:text-2xl lg:mb-36 border-l-2 border-primary pl-6'>
        <div className='transition-all duration-500' style={{ transform: inView ? "translateY(0)" : "translateY(50px)", opacity: inView ? "1" : "0" }}>A Collection of favorites projects Ive done recently. Feeling great while sharing them here</div>
      </div>
      <div className='md:flex mb-20 transition-opacity duration-500 delay-500' style={{ opacity: inView ? "1" : "0" }}>
        <div className='mb-5 flex-1 md:pr-10 relative'>
          <div onClick={() => { setPlayVideo(true); setKey(key + 1) }}>
            <Image src="/static/images/project-example.png" width={500} height={500} alt="Project Thumbnail" className='w-full' style={{ display: playVideo ? "none" : "block" }} />
            <img src="./static/images/project-example.png" alt="sdfsdf" />
          </div>
          <div key={key}>
            <video controls src="/static/videos/trial.mp4" style={{ width: "100%", height: "100%", display: playVideo ? "block" : "none" }} autoPlay={playVideo} />
          </div>
        </div>
        <div className='flex-1'>
          <div className='text-3xl font-extrabold mb-2 font-primary'>Listenal</div>
          <div className='w-12 h-0.5 bg-primary mb-5'></div>
          <div className='text-secondary mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet nam atque ab distinctio perspiciatis odit iste dolor est odio.</div>
          <button className='text-xl px-5 py-2 border-blue-300 border-2 text-primary md:text-3xl relative after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-primary after:transition-width after:-z-10 hover:text-white'>Watch Video</button>
        </div>
      </div>
      {/* <div className='md:flex mb-20 transition-opacity duration-500 delay-500' style={{ opacity: inView ? "1" : "0" }}>
        <div className='mb-5 flex-1 md:pr-10 relative'>
          <Image src="/static/images/project-example.png" width={500} height={500} alt="Project Thumbnail" className='w-full' />
        </div>
        <div className='flex-1'>
          <div className='text-3xl font-extrabold font-primary mb-2'>Listenal</div>
          <div className='w-12 h-0.5 bg-primary mb-5'></div>
          <div className='text-secondary mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet nam atque ab distinctio perspiciatis odit iste dolor est odio.</div>
          <button className='text-xl px-5 py-2 border-blue-300 border-2 text-primary md:text-3xl relative after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-primary after:transition-width after:-z-10 hover:text-white'>Watch Video</button>
        </div>
      </div> */}
      {/* <div className='md:flex mb-20 transition-opacity duration-500 delay-500' style={{ opacity: inView ? "1" : "0" }}>
        <div className='mb-5 flex-1 md:pr-10 relative'>
          <Image src="/static/images/project-example.png" width={500} height={500} alt="Project Thumbnail" className='w-full' />
        </div>
        <div className='flex-1'>
          <div className='text-3xl font-extrabold font-primary mb-2'>Listenal</div>
          <div className='w-12 h-0.5 bg-primary mb-5'></div>
          <div className='text-secondary mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet nam atque ab distinctio perspiciatis odit iste dolor est odio.</div>
          <button className='text-xl px-5 py-2 border-blue-300 border-2 text-primary md:text-3xl relative after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-primary after:transition-width after:-z-10 hover:text-white'>Watch Video</button>
        </div>
      </div> */}
    </div>
  )
}

export default ProjectsSection