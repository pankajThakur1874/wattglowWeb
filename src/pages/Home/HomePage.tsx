import { MetaTags } from '../../components/common/SEO/MetaTags';
import { StructuredData } from '../../components/common/SEO/StructuredData';
import { STRUCTURED_DATA, SITE_URL, getAssetPath } from '../../utils/constants';
import { HeroCarousel } from '../../components/common/Carousel/HeroCarousel';
import { LogoCarousel } from '../../components/common/Carousel/LogoCarousel';
import { TestimonialCarousel } from '../../components/common/Carousel/TestimonialCarousel';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { AnimatedCounter } from '../../components/common/Animations/AnimatedCounter';
import { Button } from '../../components/common/UI/Button';
import { WhatSetsUsApart } from '../../components/common/Sections/WhatSetsUsApart';
import { services, products } from '../../data/services';
import { clients } from '../../data/clients';
import { testimonials } from '../../data/testimonials';
import { projects } from '../../data/projects';
import { stats } from '../../data/stats';
import { benefits, trustIndicators } from '../../data/benefits';

const heroSlides = [
  {
    type: 'video' as const,
    src: getAssetPath('/assets/images/watt.mp4'),
    title: 'Empowering Sustainable Future through Innovative Renewable Solutions',
    buttonText: 'Read More',
    buttonLink: '/about',
  },
  {
    type: 'image' as const,
    src: getAssetPath('/assets/images/IMG_20240421_114238.jpg'),
    title: 'Your Partner in Renewable Energy Empowering Communities with Solar',
    buttonText: 'Read More',
    buttonLink: '/about',
  },
  {
    type: 'image' as const,
    src: getAssetPath('/assets/images/floating.png'),
    title: "Harnessing the Sun's Energy for a Greener Tomorrow",
    buttonText: 'Read More',
    buttonLink: '/about',
  },
  {
    type: 'image' as const,
    src: getAssetPath('/assets/images/IMG_2414.jpg'),
    title: 'Transforming Sunlight into Savings and Sustainability',
    buttonText: 'Read More',
    buttonLink: '/about',
  },
];

function HomePage() {
  return (
    <>
      <MetaTags
        title="Home"
        description="WattGlow Power is a leading Solar EPC company providing high-quality solar energy solutions including floating solar, residential & commercial installations."
        canonical={SITE_URL}
      />
      <StructuredData data={STRUCTURED_DATA} />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* About Section Enhanced */}
      <section className="about-section-enhanced">
        <div className="about-side-text mobile-hide">
          <h2 className="about-side-label fade-slide-right" data-animate>
            about us
          </h2>
        </div>

        <div className="container-xxl">
          <div className="container about-enhanced">
            <div className="about-flex-container">
              {/* Image Section */}
              <div className="about-image-section fade-slide-left" data-animate>
                <div className="about-image-wrapper">
                  <div className="rotating-sun-icon">
                    <i
                      className="fas fa-sun fa-5x"
                      style={{ color: 'var(--wg-7-primary-yellow)' }}
                    ></i>
                  </div>
                  <img
                    src={getAssetPath('/assets/images/wattGlowIm1.jpg')}
                    alt="WattGlow Power team working on solar installation"
                    className="about-main-image"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="about-text-section fade-slide-right" data-animate>
                <h2 className="about-label">About</h2>
                <h3 className="about-company-name">WattGlow Power Private Limited</h3>
                <p className="about-description">
                  WattGlow Power Private Limited is a solar Engineering, Procurement, and
                  Construction (EPC) company dedicated to providing innovative and sustainable solar
                  energy solutions. With a strong focus on quality, reliability, and customer
                  satisfaction, we strive to be the preferred choice for solar projects of all
                  sizes. We provide a comprehensive solar energy solution, specializing in the EPC
                  of solar power plants.
                </p>

                {/* Percentage Stats Section */}
                <div className="about-stats-container">
                  <div className="about-stat-item fade-scale" data-animate>
                    <div className="circular-progress-wrapper">
                      <svg className="circular-progress-svg" viewBox="0 0 120 120">
                        <circle
                          className="circular-progress-bg"
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="rgba(33, 41, 107, 0.1)"
                          strokeWidth="8"
                        />
                        <circle
                          className="circular-progress-bar"
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="url(#progressGradient)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="339.292"
                          strokeDashoffset="0"
                          transform="rotate(-90 60 60)"
                        />
                        <defs>
                          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop
                              offset="0%"
                              style={{ stopColor: 'var(--wg-7-primary-yellow)', stopOpacity: 1 }}
                            />
                            <stop
                              offset="50%"
                              style={{ stopColor: 'var(--wg-5-orange)', stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: 'var(--wg-3-primary-blue)', stopOpacity: 1 }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="circular-progress-text">
                        <span className="percent-value" data-target="100">
                          100%
                        </span>
                      </div>
                    </div>
                    <h4 className="stat-label">Project Success Rate</h4>
                  </div>

                  <div className="about-stat-item fade-scale stagger-1" data-animate>
                    <div className="circular-progress-wrapper">
                      <svg className="circular-progress-svg" viewBox="0 0 120 120">
                        <circle
                          className="circular-progress-bg"
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="rgba(33, 41, 107, 0.1)"
                          strokeWidth="8"
                        />
                        <circle
                          className="circular-progress-bar"
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="url(#progressGradient2)"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="339.292"
                          strokeDashoffset="0"
                          transform="rotate(-90 60 60)"
                        />
                        <defs>
                          <linearGradient id="progressGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop
                              offset="0%"
                              style={{ stopColor: 'var(--wg-7-primary-yellow)', stopOpacity: 1 }}
                            />
                            <stop
                              offset="50%"
                              style={{ stopColor: 'var(--wg-5-orange)', stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: 'var(--wg-3-primary-blue)', stopOpacity: 1 }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="circular-progress-text">
                        <span className="percent-value" data-target="100">
                          100%
                        </span>
                      </div>
                    </div>
                    <h4 className="stat-label">Client Satisfaction</h4>
                  </div>
                </div>

                <div className="about-inner-image fade-scale stagger-2" data-animate>
                  <img
                    src={getAssetPath('/assets/images/solarP.png')}
                    alt="Solar panels"
                    className="about-inner-img"
                    loading="lazy"
                  />
                </div>

                <div className="about-button-wrapper fade-slide-up stagger-3" data-animate>
                  <Button href="/about" variant="contact" size="lg" magnetic className="text-white">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <ScrollAnimation animation="fade-slide-up">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
              <h3 className="mb-4">
                Empowering Sustainable Future through Innovative Renewable Solutions
              </h3>
            </div>
          </ScrollAnimation>
          <div className="row g-4">
            {services.map((service, index) => (
              <ScrollAnimation
                key={service.id}
                animation="fade-slide-up"
                delay={index % 3}
                className="col-md-6 col-lg-4"
              >
                <div className="service-item card-premium rounded overflow-hidden">
                  <img
                    className="img-fluid img-300"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                  <div className="position-relative p-4 pt-0">
                    <div className="service-icon">
                      <i className={`${service.icon} fa-3x`}></i>
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <a className="small fw-medium" href={service.link}>
                      Read More<i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Our Offerings Section */}
      <div className="container-xxl py-5" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <ScrollAnimation animation="fade-slide-up">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
            <h1 className="display-4 mb-4 text-gradient">Explore Our Offerings</h1>
            <p className="lead" style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#555' }}>
              We provide a comprehensive range of products and services designed to meet your
              business and personal needs. From energy solutions to security systems, we ensure
              quality and reliability in every offering.
            </p>
          </div>
        </ScrollAnimation>
        <div style={{ marginTop: '3rem' }}></div>
        {[0, 2, 4, 6].map((startIndex) => (
          <div key={startIndex}>
            <div className="career-section body-carrer">
              {products.slice(startIndex, startIndex + 2).map((product, index) => (
                <ScrollAnimation
                  key={product.id}
                  animation="fade-scale"
                  delay={index}
                  className="career-card card-premium"
                >
                  <div className="iconCareer">
                    <i className={`${product.icon} fa-2x`}></i>
                  </div>
                  <br />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </ScrollAnimation>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>

      {/* Channel Partner */}
      <div className="channel-partner-section">
        <h1>CHANNEL PARTNER</h1>
        <div className="content">
          <div className="logo">
            <img src={getAssetPath('/assets/images/pahal-solar-logo.png')} alt="Pahal Solar Logo" />
          </div>
          <div className="text">
            <br />
            <p>
              We have partnered with Pahal Solar to provide you with the best solar panels in the
              market.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
            <h1 className="mb-4">
              Where There Is Solar,
              <br />A Brighter Path Awaits!
            </h1>
          </div>
          <div className="row">
            <div className="column">
              <div className="benefits-section center-text">
                <div className="col-lg-8">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <ScrollAnimation key={benefit.id} animation="fade-slide-left" delay={index}>
                      <div className="benefit card-premium">
                        <i className={`${benefit.icon} fa-3x`}></i>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                      <br />
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
            <div className="column">
              <img src={getAssetPath('/assets/images/solarP.png')} height="100%" width="100%" alt="Solar Panels" />
            </div>
            <div className="column">
              <div className="benefits-section center-text">
                <div className="col-lg-8">
                  {benefits.slice(3, 6).map((benefit, index) => (
                    <ScrollAnimation key={benefit.id} animation="fade-slide-right" delay={index}>
                      <div className="benefit card-premium">
                        <i className={`${benefit.icon} fa-3x`}></i>
                        <h3>{benefit.title}</h3>
                        <p>
                          {benefit.link ? (
                            <>
                              {benefit.description.split('PM Surya Ghar Muft Bijli Yojna')[0]}
                              <a href={benefit.link} target="_blank" rel="noopener noreferrer">
                                PM Surya Ghar Muft Bijli Yojna
                              </a>
                            </>
                          ) : (
                            benefit.description
                          )}
                        </p>
                      </div>
                      <br />
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <WhatSetsUsApart />

      {/* Client Logos */}
      <div className="container-fluid py-5 bg-client-logo">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '650px' }}>
            <h1 className="mb-4">Clients That Trust Us!</h1>
          </div>
          <LogoCarousel clients={clients} />
        </div>
      </div>

      {/* Stats Section */}
      <br />
      <ScrollAnimation animation="fade-slide-up">
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="stat-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={`${stat.icon} fa-3x text-white`}></i>
              <h1 className="mb-0 text-white">
                <AnimatedCounter
                  end={typeof stat.value === 'number' ? stat.value : 0}
                  suffix={stat.suffix}
                  className="text-white"
                  isVisible={true}
                  duration={2500}
                />
              </h1>
              <br />
              <h3 className="text-white">{stat.label}</h3>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Projects Delivered */}
      <section id="projects" className="projects-section">
        <ScrollAnimation animation="fade-slide-up">
          <h2>Projects Delivered</h2>
        </ScrollAnimation>
        <div className="projects-row">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              animation="fade-scale"
              delay={index}
              className="project-item card-premium zoom-on-hover"
            >
              <img src={project.image} alt={project.title} />
              <p>{project.title}</p>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div
        className="container-fluid py-5"
        style={{
          background:
            'linear-gradient(135deg, rgba(17, 59, 91, 0.03) 0%, rgba(255, 183, 77, 0.05) 100%)',
          marginTop: '3rem',
          padding: '4rem 0 !important',
        }}
      >
        <div className="container">
          <ScrollAnimation animation="fade-slide-up">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
              <div className="mb-3">
                <i
                  className="fas fa-quote-left fa-3x"
                  style={{ color: 'var(--solar-gold)', opacity: 0.3 }}
                ></i>
              </div>
              <h1 className="display-4 mb-3 text-gradient">What Our Clients Say!</h1>
              <p className="lead" style={{ fontSize: '1.1rem', color: '#666' }}>
                Real experiences from real customers who chose solar energy with WattGlow
              </p>
              <div
                style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--solar-gold) 0%, var(--sky-blue) 100%)',
                  margin: '1.5rem auto',
                  borderRadius: '2px',
                }}
              ></div>
            </div>
          </ScrollAnimation>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>

      {/* CTA Section */}
      <section
        className="cta-section fade-slide-up"
        data-animate
        style={{
          background: 'linear-gradient(135deg, #113b5b 0%, #1a4d6f 50%, #2a5f82 100%)',
          padding: '5rem 0',
          margin: '4rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255, 183, 77, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(66, 165, 245, 0.3) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <div className="float" data-animate>
                <h2 className="display-5 text-white mb-3" style={{ fontWeight: 700 }}>
                  Ready to Power Your Future with Solar?
                </h2>
                <p className="text-white mb-0" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                  Join thousands of satisfied customers who have made the switch to clean, renewable
                  energy. Get a free consultation and start saving today!
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <Button
                href="/contact"
                magnetic
                className="btn-lg ripple"
                style={{
                  background:
                    'linear-gradient(135deg, var(--solar-gold) 0%, var(--solar-bright) 100%)',
                  color: '#ffffff',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(255, 183, 77, 0.4)',
                }}
              >
                <i className="fas fa-phone-alt me-2"></i>Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section
        className="trust-section fade-slide-up"
        data-animate
        style={{ padding: '3rem 0', marginBottom: '3rem' }}
      >
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="mb-4" style={{ color: '#113b5b', fontWeight: 600 }}>
              Trusted by Leading Organizations
            </h3>
          </div>
          <div className="row g-4 align-items-center justify-content-center">
            {trustIndicators.map((indicator, index) => (
              <ScrollAnimation
                key={indicator.id}
                animation="fade-scale"
                delay={index}
                className="col-6 col-md-3 text-center"
              >
                <div
                  className="trust-badge card-premium"
                  style={{
                    padding: '2rem 1rem',
                    borderRadius: '1rem',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <i
                    className={`${indicator.icon} fa-3x mb-3`}
                    style={{ color: indicator.color }}
                  ></i>
                  <h5 style={{ fontWeight: 600, color: '#113b5b' }}>{indicator.title}</h5>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#666' }}>
                    {indicator.subtitle}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
