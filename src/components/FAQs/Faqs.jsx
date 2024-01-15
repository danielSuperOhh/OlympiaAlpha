import './faqs.css'

const Faqs = () => {
  return (
    <div className='faqs'>
        <div className="faqsheader">
            <h2>FAQs</h2>
            <p>Commonly asked questions about Olympia Alpha</p>
        </div>

        <div className="faqQuestions">
            <div className="q1" 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.33 15c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z" fill="#8b99b8"></path></svg>
                <p className='quest'>How do I get access to the Olympia Alpha discord ?</p>

                <p className='ans'>Our support team is consistently looking out to find alpha
                    callers, community managers, content creators and people that are the best
                    in their respective fields. Don't reach out to us, we'll find you and send you
                    an invitation if you're worthy.
                </p>
            </div>
            <div className="q1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.33 15c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z" fill="#8b99b8"></path></svg>
                <p className='quest'>
                    Does Olympia Alpha copy trade other community calls?
                </p>

                <p className='ans'>
                    This is 100% false, all our trade signals comes from analysis
                    from our hub of skilled and experienced traders.
                </p>
            </div>
            <div className="q1"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.33 15c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54Z" fill="#8b99b8"></path></svg>
                <p className='quest'>Is there an Olympia Alpha NFT collection Pass? </p>

                <p className='ans'>
                    As of now there's no Alpha pass trading on Openseas or any marketplace, but
                    it's something we're considering in the near future.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Faqs