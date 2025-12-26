import { Link } from 'react-router-dom';
import { COMPANY_INFO, CONTACT_INFO, SOCIAL_LINKS, WHATSAPP_URL } from '../../utils/constants';
import { footerLinks } from '../../data/navigation';

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="section">
            <h3>{COMPANY_INFO.name}</h3>
            <p>{COMPANY_INFO.description}</p>
          </div>

          <div className="section">
            <h3>QUICK LINKS</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                  <br />
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>CONTACT US</h3>
            <p>
              <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer">
                {CONTACT_INFO.address}
              </a>
            </p>
            <br />
            <p>
              📞 <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
            </p>
            <br />
            <p>
              📧 <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </p>
            <br />
            <p>🕒 {CONTACT_INFO.hours}</p>
            <br />
          </div>

          <div className="section">
            <h3>FOLLOW US</h3>
            <div className="social-icons social-icons-width">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                >
                  <img src={social.icon} alt={social.platform} />
                </a>
              ))}
            </div>
            <br />
            <h3>REVIEW US</h3>
            <a
              href="https://www.google.com/maps/place/WattGlow+Power+Pvt+Ltd/@22.296735,73.1603054,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc7cbc842bc0b:0x4108ae844b312b59!8m2!3d22.296735!4d73.1628803!16s%2Fg%2F11lmm0h55n?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave us a Google review"
            >
              <img
                src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png"
                alt="Google Reviews"
                style={{ width: '100px' }}
              />
            </a>
            <br />
            <br />
            <br />
            <br />
            <Link to="/contact" className="btn btn-lg btn-contact-us text-white">
              Contact Us →
            </Link>
          </div>
        </div>
        <div className="footer-bottom-bar p-1 bg-footer-color justify-content-md-around text-center">
          <p className="text-white mb-0">
            © 2026 WattGlow Power Pvt. Ltd. | All rights reserved |{' '}
            <Link to="/privacy-policy" className="text-white text-decoration-underline">
              Privacy Policy
            </Link>
          </p>
          <p className="text-white mb-0">
            Powered by{' '}
            <a href="https://www.ascendons.com" target="_blank" rel="noopener noreferrer" className="text-white">
              Ascendons
            </a>
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          role="button"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
          <span className="tooltip-text">Chat with us on WhatsApp</span>
        </a>
      </footer>
    </>
  );
}
