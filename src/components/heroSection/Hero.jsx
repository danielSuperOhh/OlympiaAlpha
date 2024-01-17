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
                        <Link to="section1" smooth={true} duration={1000}>DISCOVER NOW</Link>                    
                    </span>
                </button>
            </div>
        </div>

        <div className="medias" data-aos="zoom-in" data-aos-duration="3000">
            <div class="social-buttons">
                <a href="https://x.com/olympiaalpha_?s=21&t=uT7yTYU0INSw-EeL7e-xNQ" class="social-button twitter">
                    <svg
                    viewBox="0 0 512 512"
                    height="1.7em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svgIcon"
                    fill="white"
                    >
                    <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    ></path>
                    </svg>
                </a>
                
                <a href="https://discord.gg/zbYjs73r" class="social-button facebook">
                <svg
                viewBox="0 0 640 512"
                fill="white"
                height="1.4em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                ></path>
                </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero