import Faqs from '../../components/FAQs/Faqs'
import BrokenLine from '../../components/brokenLine/BrokenLine'
import Footer from '../../components/footer/Footer'
import Section1 from '../../components/section1/Section1'
import Section2 from '../../components/section2/Section2'
import Section3 from '../../components/section3/Section3'
import './sections.css'

const Sections = () => {
  return (
    <div className='sections'>
        <Section1/>
        <BrokenLine/>
        <Section2/>
        <BrokenLine flipHorizontal />
        <Section3/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Sections