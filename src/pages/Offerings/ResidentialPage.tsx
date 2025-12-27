import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { AnimatedCounter } from '../../components/common/Animations/AnimatedCounter';
import { Button } from '../../components/common/UI/Button';
import { WhatSetsUsApart } from '../../components/common/Sections/WhatSetsUsApart';
import { FAQSection } from '../../components/common/Sections/FAQSection';
import { SITE_URL } from '../../utils/constants';
import { stats } from '../../data/stats';
import { offeringContent } from '../../data/offerings';

const { residential } = offeringContent;

function ResidentialPage() {
  return (
    <>
      <MetaTags
        title="Residential Solar Solutions - Rooftop Solar for Homes"
        description="Reduce your monthly electricity bills by up to 80% with residential rooftop solar solutions. Get government subsidies and clean energy for your home."
        canonical={`${SITE_URL}/offering/residential`}
      />

      <PageHeader
        title={residential.title}
        subtitle={residential.subtitle}
        backgroundClass={residential.backgroundClass}
      />

      {/* Main Content Section */}
      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src={residential.sections[0].image}
                  style={{ objectFit: 'cover' }}
                  alt="Residential Solar"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 feature-text py-5 ps-lg-5">
              <div className="p-lg-5 ps-lg-0">
                <ScrollAnimation animation="fade-slide-up">
                  <div className="row g-4">
                    <ul className="advantages-list">
                      {residential.sections[0].content.map((text, index) => (
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
      <FAQSection faqs={residential.faqs} accordionId="residentialFaqAccordion" />
    </>
  );
}

export default ResidentialPage;
