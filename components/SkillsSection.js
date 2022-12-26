import React, { useEffect, useState } from 'react'

const SkillsSection = (props) => {
  const { setRefs, skillsInView } = props
  const skills = [
    {
      "name": "Git",
      "level": "90%"
    },
    {
      "name": "Next JS",
      "level": "90%"
    },
    {
      "name": "Node JS",
      "level": "75%"
    },
    {
      "name": "Flutter",
      "level": "65%"
    },
    {
      "name": "MongoDB",
      "level": "75%"
    },
    {
      "name": "HTML",
      "level": "90%"
    },
    {
      "name": "MySQL",
      "level": "65%"
    },
    {
      "name": "CSS",
      "level": "90%"
    },
  ]

  const [onceInView, setOnceInView] = useState(false)

  useEffect(() => {
    if (!onceInView && skillsInView) {
      setOnceInView(true)
    }
  }, [skillsInView])

  return (
    <div className='p-5 min-h-regularScreen md:flex md:p-10 lg:px-48 bg-white'>
      <div className='mb-20 flex-1' ref={(node) => setRefs(node, "skills")}>
        <div className='text-4xl font-primary mb-10 font-extrabold'>Skills</div>
        <div className='md:mr-16'>
          {skills.map((skill) => {
            return (
              <div className='mb-6' key={skill.name}>
                <div className='text-secondary mb-2'>{skill.name}</div>
                <div className='h-5 rounded-full bg-white'>
                  <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: onceInView ? skill.level : "0", opacity: onceInView ? "1" : "0" }}>{skill.level}</div>
                </div>
              </div>
            )
          })}
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