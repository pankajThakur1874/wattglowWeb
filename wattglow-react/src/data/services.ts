import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ground-mounted',
    title: 'Ground Mounted Solar',
    description: 'Large-scale ground-mounted solar power plant solutions for utility and industrial applications.',
    icon: 'fa fa-solar-panel',
    image: '/assets/images/groundMounteg.png',
    link: '/offering/ground',
  },
  {
    id: 'commercial-industrial',
    title: 'Commercial & Industrial (C&I)',
    description: 'Commercial and industrial rooftop solar solutions for businesses to reduce operating costs.',
    icon: 'fas fa-industry',
    image: '/assets/images/comercial.png',
    link: '/offering/commercial',
  },
  {
    id: 'floating-solar',
    title: 'Floating Solar (FSPV)',
    description: 'Innovative floating solar photovoltaic systems for water bodies and reservoirs.',
    icon: 'fas fa-solar-panel',
    image: '/assets/images/floating.png',
    link: '/offering/floating',
  },
  {
    id: 'residential',
    title: 'Residential',
    description: 'Affordable and efficient residential solar panel installation services for homeowners.',
    icon: 'fa fa-home',
    image: '/assets/images/residential.png',
    link: '/offering/residential',
  },
  {
    id: 'operations-maintenance',
    title: 'Operation & Maintenance',
    description: 'Comprehensive O&M services to maximize solar plant performance and longevity.',
    icon: 'fa fa-tools',
    image: '/assets/images/operationAndMaintenance.png',
    link: '/offering/operations',
  },
  {
    id: 'transmission',
    title: 'Transmission Line & Substation',
    description: 'Transmission line and substation construction and maintenance services.',
    icon: 'fa fa-bolt',
    image: '/assets/images/transmission.png',
    link: '/offering/transmission',
  },
];

export const products = [
  {
    id: 'inverter',
    title: 'Inverter',
    description: 'Our inverters convert DC power from solar panels or batteries into AC power for homes and businesses. From small residential units to large commercial systems, we provide reliable and efficient energy solutions tailored to your needs.',
    icon: 'fas fa-bolt',
  },
  {
    id: 'pv-module',
    title: 'PV Module',
    description: 'Our high-efficiency photovoltaic (PV) modules are designed to maximize solar energy generation. Durable and weather-resistant, they are perfect for residential, commercial, and industrial solar installations.',
    icon: 'fas fa-solar-panel',
  },
  {
    id: 'ups-battery',
    title: 'UPS & Battery',
    description: 'Our uninterruptible power supply (UPS) systems and batteries ensure seamless operations during power outages. Ideal for homes, offices, and critical infrastructure, they provide reliable backup power to protect your devices and data.',
    icon: 'fas fa-battery-full',
  },
  {
    id: 'electrical-equipment',
    title: 'Electrical Equipment',
    description: 'We offer essential electrical equipment like ACDB, DCDB, earthing systems, and lightning arrestors. These components ensure safe and efficient electrical systems for residential, commercial, and industrial applications.',
    icon: 'fas fa-plug',
  },
  {
    id: 'cctv',
    title: 'CCTV',
    description: 'Our advanced CCTV systems provide high-resolution surveillance for homes, businesses, and public spaces. With features like night vision and remote monitoring, they ensure enhanced security and peace of mind.',
    icon: 'fas fa-video',
  },
  {
    id: 'energy-monitoring',
    title: 'Energy Monitoring',
    description: 'Our energy monitoring systems allow you to track and optimize energy usage in real-time. Ideal for businesses and homeowners, these systems help reduce costs and improve energy efficiency.',
    icon: 'fas fa-chart-line',
  },
  {
    id: 'solar-water-heaters',
    title: 'Solar Water Heaters',
    description: 'Our solar water heaters use renewable energy to provide hot water for homes and businesses. Energy-efficient and eco-friendly, they are a cost-effective alternative to traditional water heating systems.',
    icon: 'fas fa-water',
  },
  {
    id: 'ev-charging',
    title: 'EV Charging Stations',
    description: 'We provide electric vehicle (EV) charging solutions for homes, offices, and public spaces. Our charging stations are fast, reliable, and designed to support the growing demand for sustainable transportation.',
    icon: 'fas fa-charging-station',
  },
];
