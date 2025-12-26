import { Link } from 'react-router-dom';
import { COMPANY_INFO, CONTACT_INFO, SOCIAL_LINKS, WHATSAPP_URL } from '../../utils/constants';
import { footerLinks } from '../../data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        {/* Main Footer Content */}
        <div className="footer">
          <div className="section">
            <h3>{COMPANY_INFO.shortName}</h3>
            <p className="footer-description">{COMPANY_INFO.description}</p>

            <div className="footer-stats">
              <div className="footer-stat-item">
                <i className="fas fa-users"></i>
                <div>
                  <strong>100+</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="footer-stat-item">
                <i className="fas fa-solar-panel"></i>
                <div>
                  <strong>50+ MW</strong>
                  <span>Installed Capacity</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <i className="fas fa-chevron-right"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3>CONTACT US</h3>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer">
                {CONTACT_INFO.address}
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone-alt"></i>
              <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-clock"></i>
              <span>{CONTACT_INFO.hours}</span>
            </div>
          </div>

          <div className="section">
            <h3>CONNECT WITH US</h3>
            <div className="social-icons-enhanced">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="social-icon-link"
                  title={social.platform}
                >
                  <img src={social.icon} alt={social.platform} />
                </a>
              ))}
            </div>

            <div className="footer-cta-section">
              <a
                href="https://www.google.com/maps/place/WattGlow+Power+Pvt+Ltd/@22.296735,73.1603054,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc7cbc842bc0b:0x4108ae844b312b59!8m2!3d22.296735!4d73.1628803!16s%2Fg%2F11lmm0h55n?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="google-review-badge"
              >
                <img src="/assets/images/google-review.png" alt="Google Reviews" />
                <span>Rate us on Google</span>
              </a>

              <Link to="/contact" className="btn btn-footer-cta">
                <i className="fas fa-comments"></i> Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-bar">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-white mb-0">
                  © {currentYear} WattGlow Power Pvt. Ltd. | All rights reserved |{' '}
                  <Link to="/privacy-policy" className="text-white text-decoration-underline">
                    Privacy Policy
                  </Link>{' '}
                  | Powered by{' '}
                  <a
                    href="https://www.ascendons.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Ascendons
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
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
