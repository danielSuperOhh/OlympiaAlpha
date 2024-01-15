import './section2.css'

const Section2 = () => {
  return (
    <div className='section2'>
        <div className="moreInfoImg">
            <div className="infoImg" data-aos="flip-left" data-aos-duration="2000"></div>
        </div>
        <div className="moreInfo" data-aos="flip-right" data-aos-duration="2000">
            <span className='upText'>
                <p>
                    We provide the tools and analysis for you to take the markert by storm,
                    everyone is welcome to Olympia Alpha, be it regular or experienced investors.
                </p>
            </span>
            <p>
                Being one of few community curated Alpha group fully focused on all things web3.
                There's no bear market with Olympia Alpha, our members remain profitable regardless.
            </p>
        </div>
    </div>
  )
}

export default Section2