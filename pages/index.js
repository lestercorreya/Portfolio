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
      <ResumeSection />
      <ProjectsSection />
      <a href="https://www.google.com/maps/?q=-15.623037,18.388672" target="_blank" rel="noreferrer">click</a>
      <FooterSection />
    </div >
  )
}
