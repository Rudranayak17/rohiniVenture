// src/App.js
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';

// Lazy load your pages
const Home = lazy(() => import('./page/Home'));
const Jobs = lazy(() => import('./page/Jobs'));
const AboutPage = lazy(() => import('./page/About'));
const Apply = lazy(() => import('./page/Apply'));
const Contact = lazy(() => import('./page/Contact'));
const PageNotFound = lazy(() => import('./page/PageNotFound.jsx'));
const CMYKPY = lazy(() => import('./page/CMYKPY'));
const Login = lazy(() => import('./page/SignIn.jsx'));
const SignUp = lazy(() => import('./page/SignUp.jsx'));
const Applhire = lazy(() => import('./page/hireform.jsx'));
const Scheme = lazy(() => import('./page/Scheme.jsx'));
const ForgotPage = lazy(() => import('./page/ForgotPage.jsx'));
function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forget-password" element={<ForgotPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/apply-hiring" element={<Applhire />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/cmykpy" element={<CMYKPY />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
