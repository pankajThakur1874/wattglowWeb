import { useState } from 'react';
import type { FormEvent } from 'react';
import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';

function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyMbgMECrjOuypLPTdu7huo5wxF0pVoMG1JJcw3xI3_VJS6rPjSiMWKRt8gPXzkPBrF/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      await response.text();
      setFormStatus('success');
      form.reset();
      alert('Message sent successfully!');
    } catch (error) {
      setFormStatus('error');
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <>
      <MetaTags
        title="Contact Us - WattGlow Power"
        description="Get in touch with WattGlow Power for all your solar energy needs. Feel free to contact us for inquiries, support, or to learn more about our services."
        canonical={`${SITE_URL}/contact`}
      />

      <PageHeader title="We are Glad You are here!" backgroundClass="page-header-ground" />

      {/* Contact Form Section */}
      <div className="container-fluid overflow-hidden px-lg-0" style={{ margin: '6rem 0' }}>
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5">
              <div className="p-lg-5 ps-lg-0">
                <ScrollAnimation animation="fade-slide-up">
                  <h1 className="mb-4">Feel Free To Contact Us</h1>
                  <p className="mb-4">
                    At WattGlow Power Private Limited, we are committed to providing exceptional service
                    and support. Whether you have questions about our products, need assistance, or simply want to
                    learn more about how we can help, we're here for you. Don't hesitate to reach out—our team is
                    always ready to guide you!
                  </p>
                </ScrollAnimation>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Name Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    {/* Email Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    {/* Agenda Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Agenda"
                          required
                        />
                        <label htmlFor="subject">Agenda</label>
                      </div>
                    </div>
                    {/* Company Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          required
                        />
                        <label htmlFor="company">Your Company</label>
                      </div>
                    </div>
                    {/* Address Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="Your Address"
                          required
                        />
                        <label htmlFor="address">Address</label>
                      </div>
                    </div>
                    {/* Country Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-control" id="country" name="country" required>
                          <option value="India">India</option>
                        </select>
                        <label htmlFor="country">Country</label>
                      </div>
                    </div>
                    {/* State Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-control" id="state" name="state" required>
                          <option value="" disabled>
                            Select your state
                          </option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Mumbai">Mumbai</option>
                        </select>
                        <label htmlFor="state">State</label>
                      </div>
                    </div>
                    {/* Pincode Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          name="pincode"
                          placeholder="Your PinCode"
                          required
                          pattern="^\d{6}$"
                          title="Please enter a valid 6-digit pin code"
                        />
                        <label htmlFor="pincode">PinCode</label>
                      </div>
                    </div>
                    {/* Phone Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Your Phone"
                          required
                          pattern="^\d{10}$"
                          title="Please enter a valid 10-digit phone number"
                        />
                        <label htmlFor="phone">Phone</label>
                      </div>
                    </div>
                    {/* Type Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-control" id="type" name="type" required>
                          <option value="" disabled>
                            Select type
                          </option>
                          <option value="Ground Mounted">Ground Mounted</option>
                          <option value="Commercial & Industrial">Commercial & Industrial</option>
                          <option value="Floating Solar">Floating Solar</option>
                          <option value="Residential">Residential</option>
                          <option value="Operation & Maintenance">Operation & Maintenance</option>
                          <option value="Transmission Lines & Substations">
                            Transmission Lines & Substations
                          </option>
                        </select>
                        <label htmlFor="type">Type</label>
                      </div>
                    </div>
                    {/* Message Field */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          style={{ height: '100px' }}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="col-12">
                      <button
                        className="btn btn-lg btn-contact-us text-white"
                        type="submit"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Google Map Section */}
            <div className="col-lg-6 pe-lg-0" style={{ height: '850px' }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute imageStyle"
                  style={{ objectFit: 'cover', borderRadius: '2%', paddingRight: '2%' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.482583000998!2d73.16266377480368!3d22.297581642994896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7cbc842bc0b%3A0x4108ae844b312b59!2sWattGlow%20Power%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1742388572892!5m2!1sen!2sin"
                  frameBorder="0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="WattGlow Power Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
