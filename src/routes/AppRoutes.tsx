import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { Spinner } from '../components/common/UI/Spinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const QHSSEPage = lazy(() => import('../pages/QHSSE/QHSSEPage'));
const ServicePage = lazy(() => import('../pages/Service/ServicePage'));
const SustainabilityPage = lazy(() => import('../pages/Sustainability/SustainabilityPage'));
const CareersPage = lazy(() => import('../pages/Careers/CareersPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));

// Offering pages
const GroundMountedPage = lazy(() => import('../pages/Offerings/GroundMountedPage'));
const ResidentialPage = lazy(() => import('../pages/Offerings/ResidentialPage'));
const CommercialPage = lazy(() => import('../pages/Offerings/CommercialPage'));
const FloatingPage = lazy(() => import('../pages/Offerings/FloatingPage'));
const OperationsPage = lazy(() => import('../pages/Offerings/OperationsPage'));
const TransmissionPage = lazy(() => import('../pages/Offerings/TransmissionPage'));
const ProductPage = lazy(() => import('../pages/Offerings/ProductPage'));

export function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="qhsse" element={<QHSSEPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Offering routes */}
          <Route path="offering">
            <Route path="ground" element={<GroundMountedPage />} />
            <Route path="residential" element={<ResidentialPage />} />
            <Route path="commercial" element={<CommercialPage />} />
            <Route path="floating" element={<FloatingPage />} />
            <Route path="operations" element={<OperationsPage />} />
            <Route path="transmission" element={<TransmissionPage />} />
            <Route path="product" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
