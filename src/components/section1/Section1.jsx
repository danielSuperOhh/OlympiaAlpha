import './section1.css'

const Section1 = () => {
  return (
    <div className='section1' id='section1'>
        <div className="aboutUs" data-aos="flip-left" data-aos-duration="2000">
            <h2>About Us</h2>

            <p>At Olympia Alpha, we understand the need for curation and exclusivity consisting
                of seasoned traders, content creators spanning the world of web3. We help you to 
                become the best version of yourself and reach your full potential on your web3 
                journey.
            </p>

            <div className="button" data-aos="fade-up">
                <button class="ui-btn ui-alt">
                    <span>
                        JOIN US 
                    </span>
                </button>
            </div>

        </div>
        <div className="aboutImg">
            <div className="blackImg" data-aos="flip-right" data-aos-duration="2500">
                
            </div>
        </div>
    </div>
  )
}

export default Section1