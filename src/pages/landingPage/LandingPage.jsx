import Hero from '../../components/heroSection/Hero'
import Navbar from '../../components/navbar/Navbar'
import './landingPage.css'
import SiFi from '../../assets/SiFi.mp4'
import Sections from '../sections/Sections'

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className="landingFirst">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={SiFi} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <Navbar/>
        <Hero/>
      </div>
      <Sections/>
    </div>
  )
}

export default LandingPage