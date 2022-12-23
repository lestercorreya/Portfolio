import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ResumeSection from '../components/ResumeSection'
import ProjectsSection from '../components/ProjectsSection'
import FooterSection from '../components/FooterSection'
import FixedBackground from '../components/FixedBackground'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <FixedBackground />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <FooterSection />
    </div >
  )
}
