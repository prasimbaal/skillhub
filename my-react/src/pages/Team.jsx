import React from 'react';

const Team = () => {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <section className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Our team is <span className="text-blue-500">75</span> professional specialists
            </h2>
            <p className="text-lg">
              Project engineers, dispatchers-analysts, employees of the production department, specialists of the IT department and master installers with a high level of qualification and specialized education.
            </p>
            <p className="text-lg mt-4">
              Thanks to office managers, marketers and sales managers, we successfully carry out commercial and administrative activities.
            </p>
            <p className="text-lg mt-4">
              Also, Technodar Group of Companies has its own production and office premises, a workshop-laboratory for equipment diagnostics, warehouses and a fleet of vehicles. Having its own production and office premises allows Technodar Group of Companies to maintain full control over its operations, ensuring the highest standards of quality and efficiency.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="team-member-1.jpg"
              alt="Team Member 1"
              className="w-16 h-16 rounded-full border-2 border-white -ml-4"
            />
            <img
              src="team-member-2.jpg"
              alt="Team Member 2"
              className="w-16 h-16 rounded-full border-2 border-white -ml-4"
            />
            <img
              src="team-member-3.jpg"
              alt="Team Member 3"
              className="w-16 h-16 rounded-full border-2 border-white -ml-4"
            />
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white bg-gray-100 text-gray-600 -ml-4">
              +75
            </div>
          </div>
        </section>
  
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Company Philosophy</h3>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-3xl font-bold mb-4">Expertise</h4>
            <p className="text-lg">
              We believe that knowledge and experience are key to the success of a company, which is why we set ourselves the goal of creating and maintaining a culture of learning and development within our team.
            </p>
          </div>
        </section>
      </div>
    );
  };

export default Team;