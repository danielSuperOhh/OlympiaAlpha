import './footer.css'
import oaLogo from '../../assets/oaLogo.png'

const Footer = () => {
  const handleContactUsClick = () => {
  const subject = encodeURIComponent('Inquiry');
  const body = encodeURIComponent('Good day,\n\nI would like to inquire about...');

  const mailtoLink = `mailto:olympiaalpha14gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
            <img src={oaLogo} alt="logo" />

          <div className="social-links">
            <a href="https://x.com/olympiaalpha_?s=21&t=uT7yTYU0INSw-EeL7e-xNQ" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://discord.gg/nW3f3XNBnu" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
        <div className="right-section">
          <h3>Get in Touch</h3>
          <p onClick={handleContactUsClick}>Email: olympiaalpha14gmail.com</p>
        </div>
      </div>
      <div className="develop">
        <p>Developed by iPlayDaniel</p>
      </div>
    </footer>
  );
};

export default Footer;
