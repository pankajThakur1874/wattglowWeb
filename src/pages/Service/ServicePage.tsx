import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';
import { services, products } from '../../data/services';

function ServicePage() {
  return (
    <>
      <MetaTags
        title="Our Services"
        description="Comprehensive solar EPC services from design to commissioning. Ground mounted, residential, commercial, floating solar, O&M, and transmission services."
        canonical={`${SITE_URL}/service`}
      />

      <PageHeader title="Services" backgroundClass="page-header-ground" />

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <ScrollAnimation animation="fade-slide-up">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
              <h1 className="mb-4">
                Empowering Sustainable Future through Innovative Renewable Solutions
              </h1>
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
                <div className="service-item rounded overflow-hidden">
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
      <br />

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
    </>
  );
}

export default ServicePage;
