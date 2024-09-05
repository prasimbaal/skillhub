import React, { useState } from "react";
import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import BlogSinglePage from "./components/common/BlogSinglePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  const handleLogin = () => {
    setIsLoggedIn(true); // Update state when user logs in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update state when user logs out
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <Courses />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/single-page"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <BlogSinglePage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />} // Pass the login handler to the LoginPage
          />
          <Route
            path="/contact"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
                <Team />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
