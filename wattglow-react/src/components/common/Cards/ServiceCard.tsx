import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../../../types';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export const ServiceCard = memo(function ServiceCard({ service, className = '' }: ServiceCardProps) {
  return (
    <div className={`card-premium ${className}`}>
      <div className="service-icon mb-4">
        <i className={`${service.icon} fa-3x text-primary`}></i>
      </div>
      <h4 className="mb-3">{service.title}</h4>
      <p className="mb-4">{service.description}</p>
      <Link to={service.link} className="btn btn-primary">
        Learn More <i className="fa fa-arrow-right ms-2"></i>
      </Link>
    </div>
  );
});
