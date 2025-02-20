// src/App.js
import React, { Suspense, lazy, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading.jsx";
import { Navigate, BrowserRouter as Router, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import RedirectRoute from "./protectedRoute/RedirectRoute.jsx";
import {
  authError,
  selectCurrentIsAuth,
  selectCurrentUser,
  setCredentials,
} from "./redux/reducer/auth.js";
import ProtectedRoute from "./protectedRoute/protectedRouter.jsx";
import { useGetMyProfileQuery } from "./redux/api/auth";
import { LoadingSkeleton } from "./loader/loader.jsx";
import imagelogo from "@/assets/logo.jpeg";
import Dashboard from "./page/Admin/dashboard";
import Layout from "./layout/Layout";
// Lazy load your pages
const Home = lazy(() => import("./page/Home"));
const Jobs = lazy(() => import("./page/Jobs"));
const AboutPage = lazy(() => import("./page/About"));
const Apply = lazy(() => import("./page/Apply"));
const Contact = lazy(() => import("./page/Contact"));
const PageNotFound = lazy(() => import("./page/PageNotFound.jsx"));
const Profile = lazy(() => import("./page/Profile"));
const Login = lazy(() => import("./page/SignIn.jsx"));
const SignUp = lazy(() => import("./page/SignUp.jsx"));
const Applhire = lazy(() => import("./page/hireform.jsx"));
const Scheme = lazy(() => import("./page/Scheme.jsx"));
const ForgotPage = lazy(() => import("./page/ForgotPage.jsx"));
const AppContent = () => {
  const { data, error, isLoading } = useGetMyProfileQuery();
  const location = useLocation();
  const reduxDispatch = useDispatch();
  const from = location.state?.from || "/";
  const user = useSelector(selectCurrentUser);
  const isAuthLoading = useSelector(selectCurrentIsAuth);
  useEffect(() => {
    if (data) {
      console.log("Data", data);
      reduxDispatch(
        setCredentials({
          user: data.user,
        })
      );
    } else if (error) {
      console.log("Error", error);
      reduxDispatch(authError());
    }
  }, [data, error]);
  if (isLoading) {
    return <LoadingSkeleton imagelogo={imagelogo} />;
  }
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<RedirectRoute redirectPath={from} />}>
            <Route path="/forget-password" element={<ForgotPage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<ProtectedRoute role={user?.role} />}>
            <Route path="/apply" element={<Apply />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/apply-hiring" element={<Applhire />} />
          </Route>
          <Route path="/" element={<Home />} />
      
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role={"admin"}>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/cmykpy" element={<CMYKPY />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
