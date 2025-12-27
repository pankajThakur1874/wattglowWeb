import { memo, useState } from 'react';
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`container my-5 ${className}`}>
      <style>{`
        #${accordionId} .accordion-button {
          color: #21296b !important;
          background-color: #ffffff !important;
          font-weight: 600 !important;
        }
        #${accordionId} .accordion-button[aria-expanded="true"] {
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
        #${accordionId} .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        #${accordionId} .accordion-content.open {
          max-height: 1000px;
          transition: max-height 0.3s ease-in;
        }
      `}</style>
      <ScrollAnimation animation="fade-slide-up">
        <h2 className="text-center mb-4">{title}</h2>
      </ScrollAnimation>
      <div className="accordion" id={accordionId}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <ScrollAnimation key={index} animation="fade-slide-up" delay={index}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`faq${index + 1}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`collapse${index + 1}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-content ${isOpen ? 'open' : ''}`}
                  aria-labelledby={`faq${index + 1}`}
                >
                  <div className="accordion-body" style={{visibility: 'visible'}}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
});

