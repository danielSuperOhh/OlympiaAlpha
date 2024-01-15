import './hero.css'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className='heroSection'>
        <h1 data-aos="flip-up" data-aos-duration="2000">
            REALIZING YOUR POTENTIAL TO BE A BETTER TRADER
        </h1>

        <div className="button" data-aos="fade-up" data-aos-duration="3000">
            <div className="button-border">
                <button class="ui-btn">
                    <span>
                        <Link to="section1" smooth={true} duration={1000}>DISCOVER NOW</Link>                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero