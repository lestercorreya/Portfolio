import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef, useCallback } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ResumeSection from '../components/ResumeSection'
import ProjectsSection from '../components/ProjectsSection'
import FooterSection from '../components/FooterSection'
import FixedBackground from '../components/FixedBackground'

export default function Home() {
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "resume"
  ]
  const sectionTitles = {
    home: "HOME",
    about: "ABOUT",
    skills: "SKILLS",
    projects: "PROJECTS",
    resume: "RESUME"
  }
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: resumeRef, inView: resumeInView } = useInView({
    threshold: 0.5,
  });

  const ref = useRef()

  const [sectionInView, setSectionInView] = useState("")

  useEffect(() => {
    sectionInViewDecider()
  }, [homeInView, aboutInView, skillsInView, projectsInView, resumeInView])

  const setRefs = useCallback((node, section) => {
    if (section === "home") {
      homeRef.current = node;
      homeRef(node);
    } else if (section === "about") {
      aboutRef.current = node;
      aboutRef(node);
    } else if (section === "skills") {
      skillsRef.current = node;
      skillsRef(node);
    } else if (section === "projects") {
      projectsRef.current = node;
      projectsRef(node);
    } else if (section === "resume") {
      resumeRef.current = node;
      resumeRef(node);
    }
  },
    [homeRef, aboutRef, skillsRef, projectsRef, resumeRef],
  );

  const sectionInViewDecider = () => {
    if (homeInView) {
      setSectionInView("home")
    } else if (aboutInView) {
      setSectionInView("about")
    } else if (skillsInView) {
      setSectionInView("skills")
    } else if (projectsInView) {
      setSectionInView("projects")
    } else if (resumeInView) {
      setSectionInView("resume")
    }
  }

  const handleSectionHeaderClick = (sectionHeader) => {
    if (sectionHeader === "home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (sectionHeader === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (sectionHeader === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (sectionHeader === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (sectionHeader === "resume") {
      resumeRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Lester Correya</title>
      </Head>
      <Header sections={sections} sectionTitles={sectionTitles} sectionInView={sectionInView} handleSectionHeaderClick={handleSectionHeaderClick} />
      <FixedBackground homeInView={homeInView} handleSectionHeaderClick={handleSectionHeaderClick} />
      <HomeSection setRefs={setRefs} />
      <AboutSection setRefs={setRefs} />
      <SkillsSection setRefs={setRefs} skillsInView={skillsInView} />
      <ProjectsSection setRefs={setRefs} projectsInView={projectsInView} />
      <ResumeSection setRefs={setRefs} resumeInView={resumeInView} />
      <FooterSection />
    </div >
  )
}
