import { MetaTags } from '../../components/common/SEO/MetaTags';
import { PageHeader } from '../../components/common/UI/PageHeader';
import { ScrollAnimation } from '../../components/common/Animations/ScrollAnimation';
import { WhatSetsUsApart } from '../../components/common/Sections/WhatSetsUsApart';
import { SITE_URL } from '../../utils/constants';

const aboutContent = {
  intro: `WattGlow Power Private Limited (WGPPL) is a solar Engineering, Procurement, and Construction (EPC) company dedicated to providing innovative and sustainable solar energy solutions. With a strong focus on quality, reliability, and customer satisfaction, we strive to be the preferred choice for solar projects of all sizes. We provide a comprehensive solar energy solution, specializing in the EPC of solar power plants. With a steadfast commitment to sustainability, innovation, and client satisfaction, WattGlow Power Solar is at the forefront of driving the global transition to clean and renewable energy.`,

  setsApart: `WattGlow Power Solar EPC is proud to be a driving force in the global shift toward clean, sustainable energy. With unwavering dedication to excellence, environmental responsibility, and client satisfaction, we continue to elevate the standards for solar EPC services and contribute to a more sustainable and prosperous future for generations to come.`,
};

const whatSetsUsApart = [
  {
    id: '1',
    title: 'Customized Solutions',
    description:
      'We understand that every client has unique energy requirements and project goals. That is why we offer tailor-made solar solutions to meet individual needs, ensuring optimal energy generation and cost savings.',
  },
  {
    id: '2',
    title: 'Commitment to Sustainability',
    description:
      'As a responsible solar EPC company, we are committed to promoting sustainable energy practices. By harnessing solar power, we help reduce carbon emissions, lower dependence on traditional energy sources, and contribute to a greener future for our planet.',
  },
  {
    id: '3',
    title: 'Technical Excellence',
    description:
      'Our team comprises skilled engineers, designers, and technicians who stay updated with the latest industry trends and technological advancements. This allows us to incorporate cutting-edge solar technology and best practices into our projects, enhancing energy efficiency and maximizing returns.',
  },
  {
    id: '4',
    title: 'Seamless Project Management',
    description:
      'We take a systematic approach to project management, ensuring smooth coordination between various stakeholders, adhering to timelines, and maintaining open communication throughout the project. Our dedicated project management team ensures that each solar plant is delivered on schedule and within budget.',
  },
  {
    id: '5',
    title: 'Quality Assurance',
    description:
      'Quality is embedded in everything we do. From meticulous site assessments to rigorous quality control measures during installation, we ensure that our solar power plants consistently meet industry-leading standards for efficiency, reliability, and longevity. Our dedication to quality underpins the lasting performance and durability of the solar systems we deliver.',
  },
  {
    id: '6',
    title: 'Innovation and Advancements',
    description:
      'The solar industry is dynamic, and at WattGlow Power Solar EPC, we stay at the forefront of technological advancements and innovations. Through ongoing research and development, we continuously seek out cutting-edge solar solutions and methodologies to optimize energy production and drive down the overall cost of solar energy.',
  },
  {
    id: '7',
    title: 'Client-Centric Approach',
    description:
      'The satisfaction of our clients is paramount. We work closely with each client to understand their energy requirements, financial objectives, and sustainability goals, and then develop and implement solar solutions that meet and exceed their expectations. Our commitment to delivering exceptional service and value has earned us the trust of numerous clients worldwide.',
  },
];

const mission = `To accelerate the adoption of solar energy by providing high-quality, reliable, and cost-effective solar solutions. This involves designing, engineering, procuring, and constructing solar power systems for diverse applications, including residential, commercial, and utility-scale projects.`;

const vision = `To empower individuals, businesses, and communities to embrace clean and sustainable energy from the sun. This vision encompasses the goal of contributing to a greener and more sustainable future by reducing carbon emissions, combating climate change, and promoting energy independence.

In pursuing these goals, a Solar EPC company aims to be a leader in the renewable energy industry, driving innovation, efficiency, and excellence in solar project development and implementation. By leveraging technology, expertise, and a commitment to customer satisfaction, the company seeks to establish itself as a trusted partner for its clients, delivering reliable and intelligent solar solutions that meet their unique energy needs.

Furthermore, a Solar EPC company aspires to make a positive impact on the global energy landscape by promoting the widespread adoption of solar power as a clean, abundant, and renewable energy source. Through collaborative partnerships, community engagement, and education, the company strives to create awareness about the benefits of solar energy and to promote a culture of environmental responsibility.`;

function AboutPage() {
  return (
    <>
      <MetaTags
        title="Why Choose Us - About WattGlow"
        description="Learn why WattGlow Power is your trusted partner for solar energy solutions. Quality, innovation, and customer satisfaction drive everything we do."
        canonical={`${SITE_URL}/about`}
      />

      <PageHeader
        title="About Us"
        subtitle="Learn about our company's mission, vision"
        backgroundClass="page-header-ground"
      />

      {/* Introduction */}
      <div className="content_sustainability">
        <ScrollAnimation animation="fade-slide-up">
          <p>{aboutContent.intro}</p>
        </ScrollAnimation>
      </div>
      <br />

      {/* What Sets Us Apart Section */}
      <div className="content_sustainability align-items-center">
        <ScrollAnimation animation="fade-slide-up">
          <div style={{ textAlign: 'center' }}>
            <h1>What Sets Us Apart</h1>
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={1}>
          <p>{aboutContent.setsApart}</p>
        </ScrollAnimation>
        <br />

        {/* Responsive Card Grid */}
        <div className="row g-4">
          {whatSetsUsApart.map((item, index) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <ScrollAnimation animation="fade-scale" delay={index % 3}>
                <div className="career-card h-100">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <br />

      {/* Our Mission */}
      <div className="content_sustainability">
        <ScrollAnimation animation="fade-slide-up">
          <div style={{ textAlign: 'center' }}>
            <h1>Our Mission</h1>
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={1}>
          <p>{mission}</p>
        </ScrollAnimation>
      </div>
      <br />

      {/* Our Vision */}
      <div className="content_sustainability">
        <ScrollAnimation animation="fade-slide-up">
          <div style={{ textAlign: 'center' }}>
            <h1>Our Vision</h1>
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animation="fade-slide-up" delay={1}>
          {vision.split('\n\n').map((paragraph, index) => (
            <p key={index}>
              {paragraph}
              {index < 2 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </p>
          ))}
        </ScrollAnimation>
      </div>
      <br />

      {/* What Sets Us Apart - Icon Grid */}
      <WhatSetsUsApart />
      <br />
    </>
  );
}

export default AboutPage;
