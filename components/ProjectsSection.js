import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import projectImage1 from '../public/static/images/project-example.png'
import { PlayCircleOutlined } from '@mui/icons-material'

const ProjectsSection = () => {
  const projects = [
    {
      "title": "Listenal",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet nam atque ab distinctio perspiciatis odit iste dolor est odio.",
      "image": projectImage1,
      "video": "trial.mp4"
    },
    {
      "title": "Listenal",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet nam atque ab distinctio perspiciatis odit iste dolor est odio.",
      "image": projectImage1,
      "video": "trial.mp4"
    },
  ]
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [playingVideoIndex, setPlayingVideoIndex] = useState("")
  const [key, setKey] = useState(1)

  const handleProjectImageClick = (index) => {
    setPlayingVideoIndex(index)
    setKey(key + 1)
  }

  return (
    <div className='min-h-regularScreen px-5 py-10 md:px-10 lg:px-48 bg-background' ref={ref}>
      <div className='text-5xl font-extrabold text-primary font-primary mb-20 md:text-6xl lg:text-7xl lg:mb-36'>My Projects</div>
      <div className='text-secondary text-lg mb-20 md:text-xl md:w-4/5 md:ml-20 lg:text-2xl lg:mb-36 border-l-2 border-primary pl-6'>
        <div className='transition-all duration-500' style={{ transform: inView ? "translateY(0)" : "translateY(50px)", opacity: inView ? "1" : "0" }}>A Collection of favorites projects Ive done recently. Feeling great while sharing them here</div>
      </div>
      {projects.map((project, index) => {
        return (
          <div className='md:flex mb-20 transition-opacity duration-500 delay-500' style={{ opacity: inView ? "1" : "0" }} key={project.title}>
            <div className='mb-5 flex-1 md:pr-10 relative'>
              <div onClick={() => handleProjectImageClick(index)} className="relative flex justify-center items-center cursor-pointer" style={{ display: playingVideoIndex === index ? "none" : "flex" }}>
                <Image src={project.image} alt="Project Thumbnail" className='w-full' />
                <div className='absolute w-12 h-12 rounded-full bg-black opacity-50 lg:w-24 lg:h-24 lg:hidden'></div>
                <div className='w-full h-full flex justify-center items-center lg:opacity-70 lg:hover:opacity-100 absolute'>
                  <PlayCircleOutlined className='text-7xl text-white rounded-full lg:text-9xl' />
                </div>
              </div>
              <div key={key}>
                <video controls src={`/static/videos/${project.video}`} style={{ width: "100%", height: "100%", display: playingVideoIndex === index ? "block" : "none" }} autoPlay={playingVideoIndex === index} />
              </div>
            </div>
            <div className='flex-1'>
              <div className='text-3xl font-extrabold mb-2 font-primary'>Listenal</div>
              <div className='w-12 h-0.5 bg-primary mb-5'></div>
              <div className='text-secondary mb-5 lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eveniet nam atque ab distinctio perspiciatis odit iste dolor est odio.</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsSection