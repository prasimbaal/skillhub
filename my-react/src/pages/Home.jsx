import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import backgroundImage from "../components/assets/images/serv1.jpg";
import heroImg from "../components/assets/images/hero4.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa";
import About from "./About";
import Courses from "./Courses";
import Services from "./Services";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Services />
      <Blog />
    </>
  );
};

export const HomeContent = () => {
  const navigate = useNavigate(); // Use the navigate hook for redirection

  const handleSignUpClick = () => {
    navigate("/login"); // Navigate to the login page when clicked
  };

  return (
    <>
      <section
        className="bg-cover py-10 h-[80vh] md:h-[80vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row items-center mt-12">
            <div className="py-0 md:w-1/2 text-center md:text-left">
              <h1 className="text-9xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-gray-500 bg-clip-text text-transparent">
                Elevate Your Potential With SkillHub
              </h1>
              <p className="  bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent mb-6">
              At SkillsHub, we empower learners to master new skills and advance their careers with a wide range of high-quality trainings. SkillsHub offers flexible learning paths tailored to your goals. Join our community and start your journey to success today.
              </p>
              <div>
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded mr-4 transition-all hover:bg-blue-700 cursor-pointer"
                  onClick={handleSignUpClick} // OnClick to handle the sign-up navigation
                >
                  Sign Up
                </button>
                {/*<button className="bg-gray-300 text-black px-6 py-3 rounded">Learn More</button>*/}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 mb-0 md:mt-0">
              <img
                src={heroImg}
                alt="E-learning"
                className="w-full h-full max-w-[700px] max-h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;