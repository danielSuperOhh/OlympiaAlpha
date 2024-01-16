import './footer.css'
import oaLogo from '../../assets/oaLogo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
            <img src={oaLogo} alt="logo" />

          <div className="social-links">
            <a href="https://x.com/olympiaalpha_?s=21&t=uT7yTYU0INSw-EeL7e-xNQ" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
        <div className="right-section">
          <h3>Get in Touch</h3>
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="develop">
        <p>Developed by iPlayDaniel</p>
      </div>
    </footer>
  );
};

export default Footer;
