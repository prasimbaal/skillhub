import React from 'react';
import backgroundImage from "../components/assets/images/s1.jpg";
import mission from '../components/assets/images/mission.png';
import vision from '../components/assets/images/vision.png';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { GiBinoculars } from "react-icons/gi";

const About = () => {
  return (
    <div className="relative h-[80vh] md:h-full overflow-y-auto">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay to darken the background slightly */}
      <div className="absolute inset-0 bg-white opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-10">
        {/* About Us Section */}
        <section className="mb-5">
          <h2 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-white via-blue-900 to-black bg-clip-text text-transparent">
            About us
          </h2>
          <p className="text-lg text-black text-center">
            Skills Hub is a dynamic and innovative organization dedicated to empowering individuals and organizations to thrive in a rapidly evolving world.
            We believe that skills are the key to unlocking human potential and driving positive change across diverse sectors.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2">
            <img src={vision} alt="Our Vision" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <GiBinoculars className="text-5xl text-blue-500" />
            <h2 className="text-3xl text-black font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-black">
              To become a leading provider of skills development solutions in Ethiopia, driving positive impact through innovative training programs, impactful consulting services, and strategic partnerships.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2 order-2 md:order-1 md:pr-10">
            <BsFillRocketTakeoffFill className="text-4xl text-red-500" />
            <h2 className="text-3xl text-black font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-black">
              To empower individuals and communities in Ethiopia with the knowledge, skills,
              and confidence they need to achieve their full potential and contribute to a more
              prosperous and equitable society.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 ">
            <img src={mission} alt="Our Mission" className="w-full h-auto" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
