import './footer.css'
import oaLogo from '../../assets/oaLogo.png'

const Footer = () => {
  const handleContactUsClick = () => {
    // Replace 'Subject' and 'Body' with the desired subject and body of the email
  const subject = encodeURIComponent('Inquiry');
  const body = encodeURIComponent('Good day,\n\nI would like to inquire about...');

  // Construct the mailto link with the specified email, subject, and body
  const mailtoLink = `mailto:olympiaalpha14gmail.com?subject=${subject}&body=${body}`;

  // Open the user's default email client
  window.location.href = mailtoLink;
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
            <img src={oaLogo} alt="logo" />

          <div className="social-links">
            <a href="https://x.com/olympiaalpha_?s=21&t=uT7yTYU0INSw-EeL7e-xNQ" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://discord.gg/zbYjs73r" target="_blank" rel="noopener noreferrer">Discord</a>
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
