import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
          <h2>Olympia Alpha</h2>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
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
    </footer>
  );
};

export default Footer;
