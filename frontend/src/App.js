import React from "react";
import './index.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Instructor from "./pages/Instructor";
import LoginPage from "./pages/LoginPage";
import BlogSinglePage from "./components/common/BlogSinglePage";

const App = () => {
  return (
    <>

     <Router>
        <Routes>
          <Route 
          path="/" 
          element = {
              <Layout>
                <Home/>
                </Layout>
              }
              />
              <Route 
          path="/about" 
          element = {
              <Layout>
                <About/>
                </Layout>
              }
              />
              <Route 
          path="/blog" 
          element = {
              <Layout>
                <Blog/>
                </Layout>
              }
              />
              <Route 
          path="/courses" 
          element = {
              <Layout>
                <Courses/>
                </Layout>
              }
              />
              <Route 
          path="/instructor" 
          element = {
              <Layout>
                <Instructor/>
                </Layout>
              }
              />
        
              
              <Route 
          path="/single-page" 
          element = {
              <Layout>
                <BlogSinglePage/>
                </Layout>
              }
              />
              <Route
          path="/login"
          element={<LoginPage/>}
              />

        </Routes>
     </Router>
     </>
  );
};

export default App;
