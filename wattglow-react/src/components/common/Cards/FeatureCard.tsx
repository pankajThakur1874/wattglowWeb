import { memo } from 'react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string | ReactNode;
  className?: string;
}

export const FeatureCard = memo(function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div className={`card-premium text-center p-4 ${className}`}>
      <div className="feature-icon mb-4">
        <i className={`${icon} fa-3x text-primary icon-glow`}></i>
      </div>
      <h4 className="mb-3">{title}</h4>
      <div className="feature-description">{description}</div>
    </div>
  );
});
