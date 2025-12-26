import { memo } from 'react';
import { ScrollAnimation } from '../Animations/ScrollAnimation';
import { features } from '../../../data/benefits';

interface WhatSetsUsApartProps {
  title?: string;
  className?: string;
}

export const WhatSetsUsApart = memo(function WhatSetsUsApart({
  title = 'What Sets Us Apart',
  className = '',
}: WhatSetsUsApartProps) {
  return (
    <div className={`container-fluid py-5 ${className}`}>
      <ScrollAnimation animation="fade-slide-up">
        <h2 className="text-center mx-auto" style={{ display: 'block' }}>
          {title}
        </h2>
      </ScrollAnimation>
      <br />
      <br />
      <br />
      <div className="features-grid features-grid-4">
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
      <div className="features-grid features-grid-3">
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
  );
});
