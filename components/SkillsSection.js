import React, { useEffect, useState } from 'react'

const SkillsSection = (props) => {
  const { setRefs, skillsInView } = props
  const skills = [
    {
      "name": "Microsoft Azure",
      "level": "75%"
    },
    {
      "name": "Git",
      "level": "90%"
    },
    {
      "name": "Excel VBA",
      "level": "90%"
    },
    {
      "name": "Powershell",
      "level": "80%"
    },
    {
      "name": "Typescript",
      "level": "90%"
    },
    {
      "name": "Python",
      "level": "90%"
    },
    {
      "name": "React JS",
      "level": "90%"
    },
    {
      "name": "Node JS",
      "level": "90%"
    },
    {
      "name": "C#",
      "level": "80%"
    },
  ]
  const experiences = [
    {
      "company": "RMIT University",
      "duration": "January 2024 - Present",
      "designation": "Application Development Officer",
      "responsibilites": [
        "Developed and maintained custom Excel VBA solutions in collaboration with cross-functional teams. These solutions optimized various business processes through automation, leading to enhanced efficiency.",
        "Conducted training sessions for end-users to enhance their proficiency in using custom software solutions, improving overall user adoption.",
        "Implemented integration of Xlwings with Python enabling seamless interaction between Excel and Python environments for enhanced data processing and analysis.",
        "Implemented database storage APIs using Flask to enhance data management, enabling seamless storage, retrieval, and manipulation."
      ]
    },
    {
      "company": "Stomble",
      "duration": "April 2023 - July 2023",
      "designation": "Junior Backend Engineer",
      "responsibilites": [
        "Used Logic apps for Triggering actions based on pre-defined schedules, like sending daily reports or weekly reminders.",
        "Optimized database queries and implemented indexing strategies in PostgreSQL, resulting in an improvement in query performance and reduced response times.",
        "Defined pipeline configurations for steps within each stage such as installing dependencies, running build tools, executing tests, and deploying the software using YAML in Azure Pipelines.",
        "Actively participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives, to foster effective collaboration and timely delivery of features."
      ]
    },
    {
      "company": "Vah Vah Institute Pvt Ltd",
      "duration": "June 2022 - November 2022",
      "designation": "Associate Software Developer",
      "responsibilites": [
        "Created Infrastructure as Code (IaC) templates using ARM and Bicep to provision and manage Azure resources efficiently, ensuring consistency and scalability across environments.",
        "Used Powershell to Manage resources in Azure, including provisioning, configuration, and deployment of services.",
        "Automated repetitive tasks like user creation, permission management, software installation, and configuration on Windows systems using powershell.",
        "Developed high-performance, SEO-friendly web application using Next.js and TypeScript, leveraging both server-side rendering (SSR) and static site generation (SSG) capabilities."
      ]
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