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
            <p>Contact Us</p>
        </div>
    </nav>
  )
}

export default Navbar