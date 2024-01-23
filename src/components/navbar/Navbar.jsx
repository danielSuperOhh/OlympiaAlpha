import './navbar.css'
import oaLogo from '../../assets/oaLogo.png'


const Navbar = () => {
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