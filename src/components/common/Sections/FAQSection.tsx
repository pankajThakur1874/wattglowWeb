import { memo } from 'react';
import { ScrollAnimation } from '../Animations/ScrollAnimation';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  accordionId?: string;
  className?: string;
}

export const FAQSection = memo(function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  accordionId = 'faqAccordion',
  className = '',
}: FAQSectionProps) {
  return (
    <div className={`container my-5 ${className}`}>
      <style>{`
        #${accordionId} .accordion-button {
          color: #21296b !important;
          background-color: #ffffff !important;
          font-weight: 600 !important;
        }
        #${accordionId} .accordion-button:not(.collapsed) {
          color: #21296b !important;
          background-color: #f6f7f8 !important;
          box-shadow: none !important;
        }
        #${accordionId} .accordion-button:hover,
        #${accordionId} .accordion-button:focus {
          color: #21296b !important;
          background-color: #f6f7f8 !important;
          border-color: #21296b !important;
        }
        #${accordionId} .accordion-body {
          color: #1a2a36 !important;
          background-color: #f6f7f8 !important;
        }
      `}</style>
      <ScrollAnimation animation="fade-slide-up">
        <h2 className="text-center mb-4">{title}</h2>
      </ScrollAnimation>
      <div className="accordion" id={accordionId}>
        {faqs.map((faq, index) => (
          <ScrollAnimation key={index} animation="fade-slide-up" delay={index}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`faq${index + 1}`}>
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index + 1}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`collapse${index + 1}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index + 1}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`faq${index + 1}`}
                data-bs-parent={`#${accordionId}`}
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
});

