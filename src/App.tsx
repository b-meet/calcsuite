import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { CalculatorPage } from './pages/CalculatorPage';
import NotFound from './pages/NotFound';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import About from './pages/legal/About';
import Contact from './pages/legal/Contact';
import { WidgetGenerator } from './pages/WidgetGenerator';
import { Resources } from './pages/Resources';
import { ArticleLayout } from './pages/ArticleLayout';
import { AlternativesLayout } from './pages/AlternativesLayout';
import { Directory } from './pages/Directory';
import { KenKen } from './pages/KenKen';
import { BrainTrainingHub } from './pages/BrainTrainingHub';
import { Suspense, useEffect } from 'react';
import { usePWAInstall } from './hooks/usePWAInstall';

import ReactGA from 'react-ga4';
import { ToolsPage } from './pages/ToolsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return null;
}

function App() {
  usePWAInstall();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<Home />} />
          <Route
            path="calculator/:calculatorId/:scenarioId?"
            element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <CalculatorPage />
              </Suspense>
            }
          />
          <Route
            path="salary/:scenarioId"
            element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <CalculatorPage />
              </Suspense>
            }
          />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<NotFound />} />
          <Route path="widget-generator" element={<WidgetGenerator />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:articleId" element={<ArticleLayout />} />
          <Route path="directory" element={<Directory />} />
          <Route path="brain-training/kenken" element={<KenKen />} />
          <Route path="brain-training" element={<BrainTrainingHub />} />
          <Route path="alternatives" element={<Navigate to="/resources" replace />} />
          <Route path="alternatives/:competitorId" element={<AlternativesLayout />} />
          <Route
            path="tools/:category/:slug"
            element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <ToolsPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
