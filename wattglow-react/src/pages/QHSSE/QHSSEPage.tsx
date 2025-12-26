import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { SITE_URL } from '../../utils/constants';
import { features } from '../../data/benefits';

const hsseObjectives = [
  'Meet or exceed all applicable legal and other compliance obligations, irrespective of the requirements of enforcement authorities in the country of operation.',
  'Identify, assess, and manage risks that impact health, safety, and the environment before commencing activities, when circumstances change, and throughout project phases.',
  'Ensure that suppliers and service providers follow guidelines and practices that align with Wattglow Power regarding Health, Safety, Security, and Environmental aspects, as per requirements specified by our principles and/or customers.',
  'Protect the environment by reducing the environmental impacts of our products and services.',
  'Foster a culture that empowers and supports anyone intervening to safeguard people and the environment.',
  'Involve and participate in all possible environmental initiatives, which can help enhance the positive impacts on the environment and plan proactive measures to ensure the same.',
  'Lead, train, and motivate our people, contractors, and suppliers to work safely and responsibly.',
  'Safeguard our personnel, stakeholders, and assets while maintaining the safety of our facilities and asset integrity.',
  'Execute health management programs, including effective injury management and recovery, to maintain and improve the well-being of our employees.',
  'To independently analyze performance parameters and populate the system\'s improvement opportunities through audits and visits.',
  'Actively contribute to the social and economic development of the communities in which we operate.',
];

const qualityCommitments = [
  'Turning customer\'s pain points into business opportunities and delivering best-in-class solutions.',
  'Conformance to customer requirements and delivering them the best business solutions.',
  'Enable business growth through continual improvements across our products and services spectrum.',
  'Provide value-added services, as perceived by our customers, while maintaining standards of quality, health, safety, and the environment.',
  'Meet or exceed compliance with applicable standards and regulations, adhering to the highest level of organization values and ethics.',
  'Promoting the use of risk-based thinking to ensure that risks and opportunities are determined and addressed.',
  'Establish objectives and measures that assure the achievement of our vision.',
  'Manufacturing and supply of equipment to meet customer\'s needs, applicable statutory, regulatory, and safety standards.',
  'Continuous building of skills and core competencies amongst personnel to bring about the effectiveness required for design, manufacturing, testing, and servicing of products.',
  'Evaluating manufacturing and field performance data to effect improvements in technological processes and product performance.',
];

function QHSSEPage() {
  return (
    <>
      <MetaTags
        title="QHSSE - Quality, Health, Safety, Security & Environment"
        description="WattGlow Power's commitment to Health, Safety, Security, Environment, and Quality excellence. Learn about our QHSSE management system and standards."
        canonical={`${SITE_URL}/qhsse`}
      />

      <PageHeader title="" backgroundClass="page-header-qhsse" />

      {/* Health, Safety, Security & Environment Section */}
      <div className="container" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 }}>
        <ScrollAnimation animation="fade-slide-up">
          <h1>Health, Safety, Security & Environment</h1>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={1}>
          <p>
            Wattglow Power values incorporating Health, Safety, Security, and Environmental standards into our business
            practices. It is committed to meeting the highest standards of health and safety for its people, including
            employees, contractors, visitors, and vendors while providing safe products and services to our customers.
          </p>
          <p>
            This commitment is at the forefront of our management system, and we shall tenaciously pursue our objective to
            continually improve all our processes and systems, thereby attaining a healthy and safe business
            performance.
          </p>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={2}>
          <p>Our health, safety, security, and environmental management system aims to:</p>
          <ul>
            {hsseObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>
      <br />

      {/* Quality Section */}
      <div className="container" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 }}>
        <ScrollAnimation animation="fade-slide-up">
          <h1>Quality</h1>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={1}>
          <p>
            Wattglow Power is committed to understanding and exceeding our customers' expectations. The quality and integrity
            of our products and services are central to achieving customer satisfaction and propelling organizational
            growth. Every person owns the responsibility for quality in business.
          </p>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={2}>
          <p>Wattglow Power aspires to fulfill its commitments to quality through:</p>
          <ul>
            {qualityCommitments.map((commitment, index) => (
              <li key={index}>{commitment}</li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>

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

export default QHSSEPage;
