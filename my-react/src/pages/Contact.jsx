import React, { useState } from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import backgroundImage from "../components/assets/images/contact.jpg"
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
  };


  return (
    <div
    className="min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="p-6 max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg">
      <h1 className="text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-700 via-blue-800 to-red-700 bg-clip-text text-transparent">Contact Us</h1>
      <div className="border border-gray-300 rounded-lg p-6 shadow-md mb-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>
          <label className="block">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>
          <label className="block">
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </label>
          <label className="block">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            ></textarea>
          </label>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>Email: </p>
        <p>Phone: +251 96 355 5592</p>
        <p>Address: Oromia Tower,Office No.210</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492.5960783184508!2d38.7908196!3d8.9934257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cab424f4c5%3A0xe9550f8c122b5fa6!2zT3JvbWlhIFRvd2VyIHwgQm9sZSB8IOGKpuGIruGImuGLqyDhibPhi4jhiK0gfCDhiabhiIw!5e0!3m2!1sen!2set!4v1722415505929!5m2!1sen!2set"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 border border-gray-300 rounded-md"
        ></iframe>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/SecuredTech"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-blue-700 hover:underline"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.facebook.com/SecuredTech"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-blue-500 hover:underline"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.linkedin.com/company/securedtech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:underline"
        >
          <FaWhatsapp />
        </a>
      </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
        <p>Monday - Friday: 9 AM - 5 PM</p>
        <p>Saturday: 10 AM - 2 PM</p>
        <p>Sunday: Closed</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Privacy Statement</h2>
        <p>Your privacy is important to us. We will not share your information with third parties.</p>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;