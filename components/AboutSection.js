import React from 'react'

const AboutSection = (props) => {
  const { setRefs } = props

  return (
    <div className='w-screen p-5 min-h-regularScreen flex flex-col justify-center md:px-10 lg:px-48 md:p-6 bg-background/[0.9] relative' ref={(node) => setRefs(node, "about")}>
      <div className='text-primary mb-4 font-semibold md:text-lg md:mb-6'>About me</div>
      <div className='text-4xl font-primary mb-14 font-extrabold lg:text-5xl lg:mb-24'>I am a software developer based in Melbourne, Australia, experienced in building web & mobile applications.</div>
      <div className='md:flex'>
        <div className='font-primary text-xl mb-5 text-primary font-extrabold md:flex-1 md:text-3xl lg:text-4xl'>I build beautiful & complex websites while maintaining code efficiency and readability.</div>
        <div className='text-secondary md:flex-1 md:text-lg'>
          <div className='mb-4'>
            I have worked on both front-end and back-end development areas with hands-on experience working in CI/CD environment using technologies such as Next JS, Node JS, Mongo DB, MySQL, and Typescript to name a few of my skills mentioned in the following section.
          </div>
          <div className='mb-4'>
            I am a quick learner and a hard-working professional with excellent problem solving skills who is open to learning new technologies, hence I am flexible in adapting to any new technology which will help me grow professionally.
          </div>
          <div>
            To give a glimpse of my educational background, I hold a Bachelor’s degree from Dayanand Sagar college of engineering, Bangalore, and I am currently pursuing a master’s degree in Information Technology at RMIT University, Melbourne, Australia.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection