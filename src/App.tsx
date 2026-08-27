import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { CalculatorPage } from './pages/CalculatorPage';
import NotFound from './pages/NotFound';
import { lazy, Suspense, useEffect } from 'react';
import { usePWAInstall } from './hooks/usePWAInstall';

import ReactGA from 'react-ga4';

// Routes below the main traffic paths are split out of the entry chunk: a
// visitor reading a calculator should not be downloading the KenKen game,
// the widget generator or the alternatives content to get there.
const WidgetGenerator = lazy(() => import('./pages/WidgetGenerator').then(m => ({ default: m.WidgetGenerator })));
const Resources = lazy(() => import('./pages/Resources').then(m => ({ default: m.Resources })));
const ArticleLayout = lazy(() => import('./pages/ArticleLayout').then(m => ({ default: m.ArticleLayout })));
const AlternativesLayout = lazy(() => import('./pages/AlternativesLayout').then(m => ({ default: m.AlternativesLayout })));
const Directory = lazy(() => import('./pages/Directory').then(m => ({ default: m.Directory })));
const KenKen = lazy(() => import('./pages/KenKen').then(m => ({ default: m.KenKen })));
const BrainTrainingHub = lazy(() => import('./pages/BrainTrainingHub').then(m => ({ default: m.BrainTrainingHub })));
const ToolsPage = lazy(() => import('./pages/ToolsPage').then(m => ({ default: m.ToolsPage })));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const About = lazy(() => import('./pages/legal/About'));
const EditorialPolicy = lazy(() => import('./pages/legal/EditorialPolicy'));
const Contact = lazy(() => import('./pages/legal/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: 'pageview', page: pathname });
  }, [pathname]);

  return null;
}




function CalculatorCategoryRedirect() {
  const { calculatorId } = useParams();
  const categories = ['financial', 'health', 'math', 'other', 'india'];

  if (calculatorId) {
    const id = calculatorId.toLowerCase();

    // Category redirects
    if (categories.includes(id)) {
      return <Navigate to={`/category/${id}/`} replace />;
    }

    // Specific tool redirects for legacy or mistaken URLs
    const toolRedirects: Record<string, string> = {
      'converter': 'unit-converter',
      'date-diff': 'date-calculator',
      'basic': 'basic-math',
      'emi': 'india-emi',
      'health': 'health', // Redundant but safe
    };

    if (toolRedirects[id]) {
      return <Navigate to={`/calculator/${toolRedirects[id]}/`} replace />;
    }
  }

  return <CalculatorPage />;
}

function App() {
  usePWAInstall();
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<Home />} />
          <Route
            path="calculator/:calculatorId/:scenarioId?"
            element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <CalculatorCategoryRedirect />
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
          <Route path="editorial-policy" element={<EditorialPolicy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<NotFound />} />
          <Route path="widget-generator" element={<WidgetGenerator />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:articleId" element={<ArticleLayout />} />
          <Route path="directory" element={<Directory />} />
          <Route path="tools" element={<Directory />} />
          <Route path="category/basic" element={<Navigate to="/category/math/" replace />} />
          <Route path="salary" element={<Navigate to="/calculator/salary/" replace />} />
          <Route path="brain-training/kenken" element={<KenKen />} />
          <Route path="brain-training" element={<BrainTrainingHub />} />
          <Route path="alternatives" element={<Navigate to="/resources/" replace />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
