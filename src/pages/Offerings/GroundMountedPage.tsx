import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { AnimatedCounter } from '../../components/common/Animations/AnimatedCounter';
import { Button } from '../../components/common/UI/Button';
import { WhatSetsUsApart } from '../../components/common/Sections/WhatSetsUsApart';
import { SITE_URL, getAssetPath } from '../../utils/constants';
import { stats } from '../../data/stats';

const faqs = [
  {
    id: 1,
    question: 'How much space does a ground-mounted solar plant require?',
    answer:
      'The space requirement for a ground-mounted solar plant varies depending on the system size and other factors.',
  },
  {
    id: 2,
    question: 'How much electricity does a ground-mounted solar plant generate?',
    answer:
      'The amount of electricity generated depends on factors such as location, plant size, and sunlight exposure.',
  },
  {
    id: 3,
    question: 'Is there any subsidy available for ground-mounted solar systems in India?',
    answer:
      'Yes, subsidies are available for ground-mounted solar systems based on various state and central government policies in India.',
  },
];

function GroundMountedPage() {
  return (
    <>
      <MetaTags
        title="Ground Mounted Solar - Large Scale Solar Solutions"
        description="Turn your land into a powerful source of clean energy with ground-mounted solar plants. Ideal for utility-scale, commercial, or industrial applications."
        canonical={`${SITE_URL}/offering/ground`}
      />

      <PageHeader
        title="Ground-Mounted Solar"
        subtitle="Turn Your Roof into a Powerhouse with our efficient Commercial/Industrial Rooftop Solar Solutions"
        backgroundClass="page-header-ground"
      />
      <br />

      {/* Section 1: Introduction */}
      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src={getAssetPath('/assets/images/groundMounted1.png')}
                  style={{ objectFit: 'cover' }}
                  alt="Ground Mounted Solar"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 feature-text py-5 ps-lg-5">
              <div className="p-0">
                <ScrollAnimation animation="fade-slide-up">
                  <div className="row g-4">
                    <ul className="advantages-list">
                      <p>Have a piece of land that receives ample sunlight?</p>
                      <p>
                        A ground-mounted solar plant is the perfect way to turn that sunshine into a
                        powerful source of income and clean energy. These systems generate large
                        amounts of solar power and are ideal for utility scale, commercial, or
                        industrial applications.
                      </p>
                      <p>
                        Set up on vast open spaces of land, ground-mounted systems generate more
                        electricity than traditional rooftop systems. This translates to a higher
                        return on investment and a faster payback period.
                      </p>
                      <p>Sounds interesting? Want to learn more?</p>
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

      {/* Section 2: How It Works */}
      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5 ps-lg-5">
              <div className="p-lg-5 ps-lg-0">
                <ScrollAnimation animation="fade-slide-up">
                  <h1 className="mb-4">How Does a Ground-Mounted Solar Solution Work?</h1>
                  <div className="row g-4">
                    <ul className="advantages-list">
                      <li>
                        Solar modules are strategically positioned, with the right tilt and
                        orientation, to maximize sun exposure.
                      </li>
                      <br />
                      <li>
                        In solar plants with tracker systems, panels can be moved in horizontal or
                        vertical directions, as per the changing position of the sun throughout the
                        day. This helps in maintaining sun exposure.
                      </li>
                      <br />
                      <li>
                        The modules generate DC (Direct Current), which is converted to AC
                        (Alternating Current) through solar inverters.
                      </li>
                      <br />
                      <li>
                        The electricity can be fed into the grid and transmitted to the desired
                        location. It can also be stored in a battery backup for future use.
                      </li>
                    </ul>
                    <Button href="/contact" variant="contact">
                      Explore More
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src={getAssetPath('/assets/images/groundMounted2.png')}
                  style={{ objectFit: 'cover' }}
                  alt="Ground Mounted Solar How It Works"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Section 3: Advantages */}
      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src={getAssetPath('/assets/images/groundMounted3.png')}
                  style={{ objectFit: 'cover' }}
                  alt="Ground Mounted Solar Advantages"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 feature-text py-5 ps-lg-5">
              <div className="p-lg-5 ps-lg-0">
                <ScrollAnimation animation="fade-slide-up">
                  <h1 className="mb-4">Advantage</h1>
                  <div className="row g-4">
                    <ul className="advantages-list">
                      <li>
                        Begin with a site analysis and grid connections to optimize efficiency.
                      </li>
                      <br />
                      <li>
                        Install a photovoltaic array onto the ground for maximum sunlight exposure.
                      </li>
                      <br />
                      <li>
                        Use efficient inverter systems, cables, and connections to convert DC to AC
                        power.
                      </li>
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
          {faqs.map((faq, index) => (
            <ScrollAnimation key={faq.id} animation="fade-slide-up" delay={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`faq${faq.id}`}>
                  <button
                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  aria-labelledby={`faq${faq.id}`}
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

export default GroundMountedPage;
