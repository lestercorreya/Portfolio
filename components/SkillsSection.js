import React, { useEffect, useState } from 'react'

const SkillsSection = (props) => {
  const { setRefs, skillsInView } = props
  const skills = [
    {
      "name": "Microsoft Azure",
      "level": "75%"
    },
    {
      "name": "Kubernetes",
      "level": "75%"
    },
    {
      "name": "Excel VBA",
      "level": "90%"
    },
    {
      "name": "Selenium",
      "level": "75%"
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
      "name": "Excel VBA",
      "level": "90%"
    },
    {
      "name": "Flask",
      "level": "80%"
    },
  ]
  const experiences = [
    {
      "company": "RMIT University",
      "duration": "January 2024 - Present",
      "designation": "Application Development Officer",
      "responsibilites": [
        "Developed and maintained the Program Mapping Tool (PMT), an Excel VBA solution enhanced with Power Automate, Power BI, and Power Query, used by all colleges at RMIT, including CoBL, STEM, DSC, and RMIT Vietnam.",
        "Integrated Python with Excel VBA using XLwings to enable complex logical functionalities.",
        "Utilized Selenium for web scraping program information to automatically predict combinations, majors, and minors that students might complete or have completed.",
        "Created user guides, instructional videos, and conducted training sessions to enhance end-user proficiency with custom software solutions, improving overall user adoption.",
        "Connected with senior coordinators from each department every two weeks to gather feedback and additional requirements, while maintaining an issue tracker to promptly resolve any user issues."
      ]
    },
    {
      "company": "Stomble",
      "duration": "April 2023 - July 2023",
      "designation": "Junior Backend Engineer",
      "responsibilites": [
        "Used Logic apps for Triggering actions based on pre-defined schedules, like sending daily reports or weekly reminders to customers and staff.",
        "Performed Database migration in MongoDB for a large customer dataset using tools such as mongodump and mongorestore to support new application requirements.",
        "Enhanced existing CI/CD pipelines in Azure DevOps by incorporating tools such as YAML, Azure Repos, and Azure Pipelines, and making modifications to the testing stages to ensure more reliable delivery of high-quality software.",
        "Actively participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives, to foster effective collaboration and timely delivery of features.",
        "Managed and maintained Kubernetes Clusters by incorporating best practices for container orchestration and monitored the health of clusters using Prometheus and Grafana.",
        "Used ARM and Bicep for creating IaC (Infrastructure as Code) templates for provisioning and managing Azure Resources."
      ]
    },
    {
      "company": "Vah Vah Institute Pvt Ltd",
      "duration": "June 2022 - November 2022",
      "designation": "Associate Software Developer",
      "responsibilites": [
        "Developed the frontend of an admin portal for a makeup academy, used by 50+ staff members, using Next.js and TypeScript leveraging both server-side rendering (SSR) and static site generation (SSG) capabilities.",
        "Utilized UI frameworks such as Material UI and Tailwind CSS to create an aesthetically pleasing frontend.",
        "Developed over 50 automated tests for new features using Jest, incorporating React Testing Library, Axios, and Supertest.",
        "Virtualized test and dev environment servers using Docker and coupled it with Nginx for load balancing.",
        "Contributed to the backend development team, enhancing functionalities using Python, Flask, and MongoDB, while integrating Redis for caching and implementing indexing for optimized database performance."
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