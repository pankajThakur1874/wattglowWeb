import { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Client } from '../../../types';

interface LogoCarouselProps {
  clients: Client[];
  className?: string;
}

export const LogoCarousel = memo(function LogoCarousel({
  clients,
  className = '',
}: LogoCarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={`logo-carousel ${className}`}>
      <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.id} className="client-logo-wrapper p-3">
            <img
              src={client.logo}
              alt={client.name}
              className="client-logo"
              style={{
                maxHeight: '80px',
                width: 'auto',
                objectFit: 'contain',
                margin: '0 auto',
                display: 'block',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});
