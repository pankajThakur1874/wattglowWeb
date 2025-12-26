import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { AnimatedCounter } from '../../components/common/Animations/AnimatedCounter';
import { Button } from '../../components/common/UI/Button';
import { WhatSetsUsApart } from '../../components/common/Sections/WhatSetsUsApart';
import { SITE_URL } from '../../utils/constants';
import { stats } from '../../data/stats';
import { offeringContent } from '../../data/offerings';

const { operations } = offeringContent;

function OperationsPage() {
  return (
    <>
      <MetaTags
        title="Operation & Maintenance (O&M) Services - Solar Plant O&M"
        description="Ensure peak performance of your solar system with comprehensive O&M services. 24/7 monitoring, preventive maintenance, and emergency support."
        canonical={`${SITE_URL}/offering/operations`}
      />

      <PageHeader
        title={operations.title}
        subtitle={operations.subtitle}
        backgroundClass={operations.backgroundClass}
      />

      {/* Main Content Section */}
      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src={operations.sections[0].image}
                  style={{ objectFit: 'cover' }}
                  alt="Operation & Maintenance"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 feature-text py-5 ps-lg-5">
              <div className="p-lg-5 ps-lg-0">
                <ScrollAnimation animation="fade-slide-up">
                  <div className="row g-4">
                    <ul className="advantages-list">
                      {operations.sections[0].content.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </ul>
                    <Button href="/contact" variant="contact">
                      Explore More
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Stats Section */}
      <div className="stats-section">
        {stats.map((stat) => (
          <ScrollAnimation key={stat.id} animation="fade-scale" className="stat-item">
            <i className={`${stat.icon} fa-3x`}></i>
            <AnimatedCounter
              end={typeof stat.value === 'number' ? stat.value : 0}
              suffix={stat.suffix}
            />
            <br />
            <h3>{stat.label}</h3>
          </ScrollAnimation>
        ))}
      </div>
      <br />

      {/* What Sets Us Apart */}
      <WhatSetsUsApart />
      <br />
      <br />

      {/* FAQ Section */}
      <div className="container my-5">
        <ScrollAnimation animation="fade-slide-up">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        </ScrollAnimation>
        <div className="accordion" id="faqAccordion">
          {operations.faqs.map((faq, index) => (
            <ScrollAnimation key={index} animation="fade-slide-up" delay={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`faq${index + 1}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${index + 1}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`faq${index + 1}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </>
  );
}

export default OperationsPage;
