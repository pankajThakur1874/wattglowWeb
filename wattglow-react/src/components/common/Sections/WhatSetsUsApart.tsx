import { memo } from 'react';
import { ScrollAnimation } from '../Animations/ScrollAnimation';
import { features } from '../../../data/benefits';

interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

interface WhatSetsUsApartProps {
  title?: string;
  className?: string;
  items?: FeatureItem[];
  itemsPerRow?: number;
}

export const WhatSetsUsApart = memo(function WhatSetsUsApart({
  title = 'What Sets Us Apart',
  className = '',
  items = features,
  itemsPerRow,
}: WhatSetsUsApartProps) {
  // Split items into rows based on itemsPerRow or use default split
  const displayRows = itemsPerRow
    ? Array.from({ length: Math.ceil(items.length / itemsPerRow) }, (_, i) => ({
        items: items.slice(i * itemsPerRow, (i + 1) * itemsPerRow),
        gridClass: `features-grid-${itemsPerRow}`,
      })).filter((row) => row.items.length > 0)
    : [
        { items: items.slice(0, 4), gridClass: 'features-grid-4' },
        { items: items.slice(4, 7), gridClass: 'features-grid-3' },
      ].filter((row) => row.items.length > 0);

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
      {displayRows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={`features-grid ${row.gridClass}`}>
            {row.items.map((feature, index) => (
              <ScrollAnimation
                key={feature.id}
                animation="fade-scale"
                delay={index}
              >
                <div className="feature-item">
                  <div className="feature-item-icon">
                    <i className={`${feature.icon} fa-3x`}></i>
                  </div>
                  <div className="feature-item-content">
                    <h4>{feature.title}</h4>
                    {feature.description && (
                      <p className="feature-item-description">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          {rowIndex < displayRows.length - 1 && (
            <>
              <br />
              <br />
              <br />
              <br />
            </>
          )}
        </div>
      ))}
    </div>
  );
});
