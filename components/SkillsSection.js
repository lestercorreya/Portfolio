import React, { useEffect, useState } from 'react'

const SkillsSection = (props) => {
  const { setRefs, skillsInView } = props
  const skills = [
    {
      "name": "Git",
      "level": "90%"
    },
    {
      "name": "React JS and Next JS",
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
    {
      "name": "Typescript",
      "level": "75%"
    },
  ]
  const experiences = [
    {
      "company": "Vah Vah Institute Pvt Ltd",
      "duration": "May 2022 - Nov 2022",
      "designation": "Associate Software Developer",
      "responsibilites": [
        "Successfully executed the revamp of the company's primary website to feature a modern design, as well as incorporating additional sections to enhance the overall user experience.",
        "Integrated additional functionalities into the company's admin website in accordance with specified requirements by utilizing efficient queries and optimized indexing to ensure rapid response times and improved performance.",
        "Resolved over 50 technical issues within the administrative website through a thorough understanding of existing code and implementation of necessary modifications from both front-end and back-end perspectives.",
        "Developed and implemented three cron services to automate the updation of database values, ensuring efficient operation and fulfillment of requirements."
      ]
    },
    {
      "company": "Exathought Technology Consulting Pvt Ltd",
      "duration": "Aug 2021 - Dec 2021",
      "designation": "Software Developer Intern",
      "responsibilites": [
        "Augmented the company's primary website by incorporating additional sections and utilizing third-party libraries such as Konva.js to implement intricate user interface elements.",
        "Contributed to the development of a wholesaler-retailer cross-platform mobile app, serving as one of five front-end developers, using the Flutter framework.",
        "Collaborated closely with both UI/UX designers and back-end developers to ensure that all functionalities were implemented with a focus on both aesthetic appeal and code maintainability, resulting in optimal performance of the application."
      ]
    }
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
                <div className='h-5 rounded-full bg-background'>
                  <div className='h-full bg-primary rounded-l-full text-white flex justify-end items-center px-2 ease-in duration-700 transition-width' style={{ width: onceInView ? skill.level : "0", opacity: onceInView ? "1" : "0" }}>{skill.level}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex-1'>
        <div className='text-4xl font-primary mb-12 font-extrabold lg:mb-16'>My Experience</div>
        {experiences.map((experience) => {
          return (
            <>
              <div className='mb-16 lg:flex' key={experience.company}>
                <div className='mb-5 flex-1 lg:mr-10'>
                  <div className='mb-2 font-semibold'>{experience.duration}</div>
                  <div className='h-px bg-slate-300 w-full mb-2'></div>
                  <div className='text-secondary'>{experience.company}</div>
                </div>
                <div className='flex-2'>
                  <div className='text-primary text-xl mb-4 font-semibold'>{experience.designation}</div>
                  {experience.responsibilites.map(responsibility => {
                    return (
                      <div className='mb-5' key={responsibility}>{responsibility}</div>
                    )
                  })}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection