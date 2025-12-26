import { memo } from 'react';
import type { Testimonial } from '../../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard = memo(function TestimonialCard({
  testimonial,
  className = '',
}: TestimonialCardProps) {
  return (
    <div className={`card-premium testimonial-card ${className}`}>
      <div className="testimonial-header mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testimonial-avatar"
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div className="quote-icon">
          <i className="fa fa-quote-left text-primary"></i>
        </div>
      </div>
      <p className="testimonial-quote mb-4">"{testimonial.quote}"</p>
      <div className="testimonial-rating mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`fa fa-star ${i < testimonial.rating ? 'text-warning' : 'text-muted'}`}
          ></i>
        ))}
      </div>
      <h5 className="mb-1">{testimonial.name}</h5>
      <p className="text-muted mb-0">
        {testimonial.role} - {testimonial.company}
      </p>
    </div>
  );
});
