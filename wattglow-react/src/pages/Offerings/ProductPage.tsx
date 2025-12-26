import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';
import { products } from '../../data/services';
import { offeringContent } from '../../data/offerings';

const { product } = offeringContent;

function ProductPage() {
  return (
    <>
      <MetaTags
        title="Solar Products - Quality Components for Better Performance"
        description="Explore our range of high-quality solar products including panels, inverters, batteries, mounting structures, and more for optimal system performance."
        canonical={`${SITE_URL}/offering/product`}
      />

      <PageHeader
        title={product.title}
        subtitle={product.subtitle}
        backgroundClass={product.backgroundClass}
      />

      {/* Products Section */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <ScrollAnimation animation="fade-slide-up">
                <span className="subheading">Our Products</span>
                <h2 className="mb-4">Quality Solar Components</h2>
                <p>
                  We offer a comprehensive range of high-quality solar products designed to ensure optimal performance,
                  reliability, and longevity for your solar energy system.
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            {products.map((item, index) => (
              <ScrollAnimation
                key={item.id}
                animation="fade-scale"
                delay={index % 3}
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4"
              >
                <div className="career-card card-premium w-100">
                  <div className="iconCareer">
                    <i className={`${item.icon} fa-2x`}></i>
                  </div>
                  <br />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <ScrollAnimation animation="fade-slide-up">
            <h2 className="text-center mb-4">Why Choose Our Products?</h2>
          </ScrollAnimation>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <ScrollAnimation animation="fade-scale">
                <div className="text-center">
                  <i className="fas fa-certificate fa-3x text-primary mb-3"></i>
                  <h4>Certified Quality</h4>
                  <p>All products meet international quality standards and certifications</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4">
              <ScrollAnimation animation="fade-scale" delay={1}>
                <div className="text-center">
                  <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h4>Warranty & Support</h4>
                  <p>Comprehensive warranty coverage and dedicated technical support</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4">
              <ScrollAnimation animation="fade-scale" delay={2}>
                <div className="text-center">
                  <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                  <h4>High Efficiency</h4>
                  <p>Optimized for maximum energy generation and system performance</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
