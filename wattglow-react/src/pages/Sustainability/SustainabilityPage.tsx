import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';
import { features } from '../../data/benefits';

function SustainabilityPage() {
  return (
    <>
      <MetaTags
        title="Sustainability - Powering Tomorrow, Preserving Today"
        description="At WattGlow Power, sustainability isn't just a trend—it's a core value that guides every decision we make. Learn about our commitment to a sustainable future."
        canonical={`${SITE_URL}/sustainability`}
      />

      <PageHeader
        title="Sustainability"
        subtitle="Powering Tomorrow, Preserving Today"
        backgroundClass="page-header-sus"
      />

      {/* Main Content Section */}
      <div className="content_sustainability">
        <ScrollAnimation animation="fade-slide-up">
          <p>
            At Wattglow Power, our mission extends far beyond just producing energy—we are dedicated to creating a
            sustainable future for generations to come. As leaders in the renewable energy industry, we understand the
            significant impact our efforts can have on the environment and society. That's why, for us, sustainability isn't
            just a trend—it's a core value that guides every decision we make.
          </p>
        </ScrollAnimation>
        <br />
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={1}>
          <p>
            From capturing solar energy to developing cutting-edge technologies, our focus is on reducing carbon emissions
            and combating climate change. Our dedication to sustainability permeates all aspects of our operations, from our
            supply chain to our community initiatives, ensuring that every action we take has a positive impact.
          </p>
        </ScrollAnimation>
        <br />
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={2}>
          <p>
            By forming strategic partnerships and fostering collaboration, we are accelerating the transition to a
            low-carbon economy. Our priority is to protect the well-being of our planet and its people, and through our
            commitment to renewable energy, we aim to safeguard the present and power the future.
          </p>
        </ScrollAnimation>
        <br />
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={3}>
          <p>
            We invite you to join us on this journey toward a cleaner, more sustainable world. Together, we can make a
            lasting impact—one watt at a time.
          </p>
        </ScrollAnimation>
      </div>
      <br />

      {/* What Sets Us Apart Section */}
      <div className="container-fluid py-5">
        <ScrollAnimation animation="fade-slide-up">
          <h2 className="text-center">What Sets Us Apart</h2>
        </ScrollAnimation>
        <br />
        <br />
        <br />
        <div className="features-grid">
          {features.slice(0, 4).map((feature, index) => (
            <ScrollAnimation key={feature.id} animation="fade-scale" delay={index}>
              <div className="feature-item">
                <i className={`${feature.icon} fa-3x`}></i>
                <br />
                <h4>{feature.title}</h4>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="features-grid">
          {features.slice(4, 7).map((feature, index) => (
            <ScrollAnimation key={feature.id} animation="fade-scale" delay={index}>
              <div className="feature-item">
                <i className={`${feature.icon} fa-3x`}></i>
                <br />
                <h4>{feature.title}</h4>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <br />
    </>
  );
}

export default SustainabilityPage;
