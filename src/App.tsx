import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { CalculatorPage } from './pages/CalculatorPage';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:categoryId" element={<Home />} />
          <Route
            path="calculator/:calculatorId"
            element={
              <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                <CalculatorPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
