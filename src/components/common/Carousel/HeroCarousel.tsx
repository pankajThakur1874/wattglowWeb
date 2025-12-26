import { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '../UI/Button';

interface HeroSlide {
  type: 'video' | 'image';
  src: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export const HeroCarousel = memo(function HeroCarousel({ slides }: HeroCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'ease-in-out',
  };

  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <Slider {...settings} className="header-carousel position-relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="position-relative owl-carousel-item"
            style={{
              height: '600px',
              overflow: 'hidden',
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            {slide.type === 'video' ? (
              <video
                className="video-fluid w-100"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                className="img-fluid w-100"
                src={slide.src}
                alt={slide.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
            )}
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-6 text-white animated slideInDown">{slide.title}</h1>
                    {slide.subtitle && (
                      <p className="text-white mb-4 animated slideInDown">{slide.subtitle}</p>
                    )}
                    {slide.buttonText && slide.buttonLink && (
                      <Button
                        href={slide.buttonLink}
                        variant="contact"
                        size="lg"
                        magnetic
                        className="text-white"
                      >
                        {slide.buttonText}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});
