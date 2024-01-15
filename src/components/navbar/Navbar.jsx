import './navbar.css'

const Navbar = () => {
    const handleContactUsClick = () => {
    };

  return (
    <nav>
        <div className="logo">
            <h3>Olympia Alpha</h3>
        </div>
        <div className="contactUs" onClick={handleContactUsClick}>
            <p>Contact Us</p>
        </div>
    </nav>
  )
}

export default Navbar