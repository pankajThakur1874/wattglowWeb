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

const { floating } = offeringContent;

function FloatingPage() {
  return (
    <>
      <MetaTags
        title="Floating Solar Photovoltaic (FSPV) - Solar on Water"
        description="Generate clean energy on water with innovative FSPV technology. Conserve land, reduce evaporation, and improve efficiency with floating solar systems."
        canonical={`${SITE_URL}/offering/floating`}
      />

      <PageHeader
        title={floating.title}
        subtitle={floating.subtitle}
        backgroundClass={floating.backgroundClass}
      />

      {/* Main Content Section */}
      <div className="container-fluid overflow-hidden px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative w-100 h-100">
                <img
                  className="position-absolute img-fluid imageStyle"
                  src={floating.sections[0].image}
                  style={{ objectFit: 'cover' }}
                  alt="Floating Solar"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 feature-text py-5 ps-lg-5">
              <div className="p-lg-5 ps-lg-0">
                <ScrollAnimation animation="fade-slide-up">
                  <div className="row g-4">
                    <ul className="advantages-list">
                      {floating.sections[0].content.map((text, index) => (
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
      <FAQSection faqs={floating.faqs} accordionId="floatingFaqAccordion" />
    </>
  );
}

export default FloatingPage;
