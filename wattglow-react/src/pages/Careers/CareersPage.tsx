import { useState } from 'react';
import type { FormEvent } from 'react';
import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';
import { careerTypes, coreValues } from '../../data/careers';

function CareersPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbw6ono6vU05RSIvyA_8pl9nKr--iXtMhmOghbf7B9rvj0eihnWk6hJpQWGoTrdFx2CdHw/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData as any),
      });
      const data = await response.json();

      if (data.status === 'success') {
        setFormStatus('success');
        form.reset();
        alert('Form submitted successfully!');
      } else {
        setFormStatus('error');
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      setFormStatus('error');
      console.error('Error!', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <>
      <MetaTags
        title="Careers - Join WattGlow Power"
        description="Be a part of India's growing renewable energy company. Explore career opportunities for interns, freshers, and experienced professionals at WattGlow Power."
        canonical={`${SITE_URL}/careers`}
      />

      <PageHeader
        title="Careers"
        subtitle="Be a part of India's growing renewable energy company"
        backgroundClass="page-header-carrer"
      />

      {/* Career Types Section */}
      <div className="career-section body-carrer">
        {careerTypes.map((career, index) => (
          <ScrollAnimation
            key={career.id}
            animation="fade-scale"
            delay={index}
            className="career-card cursor-pointer"
          >
            <div onClick={scrollToForm}>
              <div className="iconCareer">
                <i className={`${career.icon} fa-3x`}></i>
              </div>
              <br />
              <h3>{career.title}</h3>
              <p>{career.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      <br />

      {/* Core Values and Principles */}
      <div className="container-xxl py-5">
        <ScrollAnimation animation="fade-slide-up">
          <h1 className="text-center" style={{ display: 'block' }}>
            Core Values and Principles
          </h1>
        </ScrollAnimation>
        <br />
        <div className="career-section body-carrer">
          {coreValues.slice(0, 2).map((value, index) => (
            <ScrollAnimation key={value.id} animation="fade-scale" delay={index}>
              <div className="career-card">
                <div className="iconCareer">
                  <i className={`${value.icon} fa-2x`}></i>
                </div>
                <br />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <div className="career-section body-carrer">
          {coreValues.slice(2, 4).map((value, index) => (
            <ScrollAnimation key={value.id} animation="fade-scale" delay={index}>
              <div className="career-card">
                <div className="iconCareer">
                  <i className={`${value.icon} fa-2x`}></i>
                </div>
                <br />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <div className="career-section body-carrer">
          {coreValues.slice(4, 6).map((value, index) => (
            <ScrollAnimation key={value.id} animation="fade-scale" delay={index}>
              <div className="career-card">
                <div className="iconCareer">
                  <i className={`${value.icon} fa-2x`}></i>
                </div>
                <br />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <br />

      {/* Application Form */}
      <div className="container-xxl py-5" id="contact-form">
        <div className="contact px-lg-0">
          <div className="container row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5">
              <ScrollAnimation animation="fade-slide-up">
                <h1 className="mb-4">WattGlow Power Private Limited</h1>
              </ScrollAnimation>
              <div className="p-lg-5 ps-lg-0">
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
                    {/* Country Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-control" id="country" name="country" required>
                          <option value="India">India</option>
                        </select>
                        <label htmlFor="country">Country</label>
                      </div>
                    </div>
                    {/* Referred By Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-control" id="referredBy" name="referredBy" required>
                          <option value="" disabled>
                            Were you referred by an existing employee
                          </option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                        <label htmlFor="referredBy">ReferredBy</label>
                      </div>
                    </div>
                    {/* Resume Link Field */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="resumeLink"
                          name="resumeLink"
                          placeholder="Share Resume Link"
                        />
                        <label htmlFor="resumeLink">ResumeLink</label>
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
                        <label htmlFor="message">Additional Information</label>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="col-12 text-center">
                      <button
                        className="btn btn-primary btn-contact-us rounded-pill py-3 px-5"
                        type="submit"
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? 'Submitting...' : 'Apply'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Image Section */}
            <div className="col-lg-6 pe-lg-0" style={{ height: '650px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src="/assets/images/img_2.png"
                  style={{ objectFit: 'cover' }}
                  alt="WattGlow Power"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareersPage;
