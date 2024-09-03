import React from 'react';
import backgroundImage from "../components/assets/images/s4.jpg";
import backgroundImage1 from "../components/assets/images/s2.jpg";
import backgroundImage2 from "../components/assets/images/s4.jpg";

const Services = () => {
  return (
    <div className="relative overflow-y-auto h-[80vh] md:h-full">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Content */}
      <div className="relative px-16 py-10">
        {/* Our Services Section */}
        <section className="mb-20">
  <h2 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-900 via-blue-800 to-red-900 bg-clip-text text-transparent">
    Our Services
  </h2>
  <p className="text-lg text--900 text-center">
    Skills Hub offers a comprehensive range of skills development services tailored to meet the unique needs of our clients.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Service 1 */}
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Skills Development Consulting</h3>
      <p className="bg-gradient-to-r  from-blue-800 via--500 to-black bg-clip-text text-transparent">
        • We provide strategic guidance and expert advice to help organizations design and implement effective skills development programs that align with their business goals.<br/>
        • Our team of experienced consultants can assist in needs assessments, curriculum development, training program design, and evaluation.
      </p>
    </div>
    {/* Service 2 */}
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Project Management</h3>
      <p className="bg-gradient-to-r  from-blue-800 via--500 to-black bg-clip-text text-transparent">
        • We bring a robust and proven project management approach to every skills development initiative, ensuring efficient delivery, successful implementation, and measurable outcomes. 
      </p>
    </div>
    {/* Service 3 */}
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">TVET Capacity Building</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We work with TVET institutions to strengthen their curriculum, teaching methodologies, and infrastructure to ensure the delivery of high-quality skills training programs.
      </p>
    </div>
    {/* Additional services */}
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Agro Skills Enhancement</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We empower farmers and agricultural professionals with the knowledge and skills to improve productivity, adopt sustainable farming practices, and enhance market access.
      </p>
    </div>
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Digital Skills Consulting and Training</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We equip individuals and organizations with the essential digital skills to thrive in the digital age, including online communication, digital marketing, data analysis, and cybersecurity. 
      </p>
    </div>
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Job Readiness and Employability Skills</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We provide comprehensive training programs that equip individuals with essential skills for job applications, interviews, and successful career transitions. 
      </p>
    </div>
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">ISO EOMS 21001:2018 Implementation Services</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We guide organizations in implementing the ISO EOMS 21001:2018 standard, establishing robust quality management systems for skills development and training programs.
        <br/>Primary School Indigenous Knowledge, Skills, and Norms Enhancement<br/>
        • We work with primary schools to integrate indigenous knowledge, skills, and cultural norms into the curriculum, fostering a deeper appreciation for local traditions and values.
      </p>
    </div>
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Apprenticeship Facilitation Services</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We support the development and implementation of impactful apprenticeship programs, bridging the gap between theoretical learning and practical skills. 
      </p>
    </div>
    <div 
      className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 h-60 overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <h3 className="text-2xl bg-gradient-to-r from-blue-900 via-cyan-400 to-black bg-clip-text text-transparent font-semibold mb-2">Tourism and Hospitality Skills Enhancement</h3>
      <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
        • We work with tourism and hospitality businesses to develop and implement customized training programs that enhance customer service skills, hospitality operations, and cultural sensitivity.
      </p>
    </div>
  </div>
</section>


        {/* Our Projects Section */}
        <section>
          <h2 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-900 via-blue-800 to-red-900 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-lg text--900 text-center">
            Skills Hub is actively involved in a range of projects across Ethiopia, focusing on areas of critical need:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:bg-blue-100 h-60 overflow-y-auto"
            style={{ backgroundImage: `url(${backgroundImage2})` }}>
              <h3 className="text-2xl font-semibold mb-2">Project One</h3>
              <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
                • Developing a comprehensive skills development program for youth in the agricultural sector: This program equips young people with the knowledge and skills to become successful entrepreneurs in agriculture, contributing to food security and rural development.
              </p>
            </div>
            {/* Project 2 */}
            <div className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:bg-blue-100 h-60 overflow-y-auto"
            style={{ backgroundImage: `url(${backgroundImage2})` }}>
              <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
              <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
                • Partnering with TVET institutions to create industry-relevant training programs: We work closely with TVETs to ensure their training programs align with the needs of the labor market, preparing students for successful careers.
              </p>
            </div>
            {/* Project 3 */}
            <div className="bg-cover bg-center p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:bg-blue-100 h-60 overflow-y-auto"
            style={{ backgroundImage: `url(${backgroundImage2})` }}>
              <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
              <p className="bg-gradient-to-r  from-blue-800 via-gray-500 to-black bg-clip-text text-transparent">
                • Implementing digital literacy programs in rural communities: We are committed to bridging the digital divide by providing digital literacy training to individuals in underserved areas. 
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
