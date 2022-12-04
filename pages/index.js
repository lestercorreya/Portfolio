import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'

export default function Home() {

  return (
    <div className='h-screen w-screen overflow-y-auto relative overflow-x-hidden' style={{ perspective: "10px", transformStyle: "preserve-3d" }}>
      <BackgroundImage />
      <Header />
    </div>
  )
}
