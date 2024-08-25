import React from 'react'

const AboutSection = (props) => {
  const educations = [
    {
      "university": "RMIT University",
      "course": "Master of Information Technology",
      "location": "Melbourne, Victoria, Australia",
      "duration": "Pursuing"
    },
    {
      "university": "Dayanand Sagar University",
      "course": "Bachelor of Engineering",
      "location": "Bangalore, Karnataka, India",
      "duration": "2018 - 2022"
    }
  ]

  const { setRefs } = props

  return (
    <div className='w-screen p-5 min-h-regularScreen flex flex-col justify-center md:px-10 lg:px-48 md:p-6 bg-background/[0.9] relative' ref={(node) => setRefs(node, "about")}>
      <div className='text-primary mb-4 font-semibold md:text-lg md:mb-6'>About me</div>
      <div className='text-4xl font-primary mb-14 font-extrabold lg:text-5xl lg:mb-24'>{"I'm a student at RMIT University pursuing a master's degree in Information Technology."}</div>
      <div className='md:flex'>
        <div className='text-secondary mb-16 border-r-blue-200 md:flex-1 md:text-lg md:border-r-2 md:pr-10 lg:pr-20'>
          <div className='mb-4'>
            {"I'm a software developer with over an year of experience in developing and maintaining software applications. I'm adept at writing efficient and clean code in multiple programming languages and always committed to staying current with new technologies and industry trends to continuously improve my skills and deliver outstanding results. In addition to my technical abilities, I'm also a strong team player and an excellent problem solver."}
          </div>
          <div className='mb-4'>
            {"In my leisure time, while I enjoy outdoor team sports like cricket and appreciate the collaboration they involve, my true passions lie in gaming, coding, and working out. These activities are where I find the most joy and fulfillment, and they are a central part of my life. Staying active and healthy is also important to me, as I firmly believe in the saying, 'health is wealth.'"}
          </div>
          <div>
            {"I would love to take up"} <span className='font-bold text-black'>{"Internships"}</span> {"or"} <span className='font-bold text-black'>{"Work Integrated Learning (WIL)"}</span> {"opportunities which would help me build the necessary skills and help me understand the industry better. This would also help me to build valuable connections and relationships with professionals in the field and support me in exploring new career paths and making informed decisions about the future."}
          </div>
        </div>
        <div className='flex-1 md:ml-10 lg:ml-20'>
          <div className='text-primary mb-8 font-semibold underline md:text-lg md:mb-14'>Educational Background</div>
          {educations.map((education) => {
            return (
              <>
                <div className='mb-10'>
                  <div className='flex justify-between font-bold text-lg'>
                    <div>{education.course}</div>
                    <div>| <span className='font-normal text-base'>{education.duration}</span> |</div>
                  </div>
                  <div>{education.university}</div>
                  <div className='text-primary italic'>{education.location}</div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutSection