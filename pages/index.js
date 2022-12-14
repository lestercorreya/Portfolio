import Header from '../components/Header'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
    </div >
  )
}
