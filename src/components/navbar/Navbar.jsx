import './navbar.css'
import oaLogo from '../../assets/oaLogo.png'


const Navbar = () => {
    const handleContactUsClick = () => {
    };

  return (
    <nav>
        <div className="logo">
          <img src={oaLogo} alt="logo" />
        </div>
        <div className="contactUs" onClick={handleContactUsClick}>
            <p><a href="https://x.com/olympiaalpha_?s=21&t=uT7yTYU0INSw-EeL7e-xNQ">Contact Us</a></p>
        </div>
    </nav>
  )
}

export default Navbar