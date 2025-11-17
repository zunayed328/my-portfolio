import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 bg-white text-center">
      <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
      <div className="flex justify-center space-x-6 text-2xl text-gray-700">
        <a href="https://www.linkedin.com/in/mohammad-zunayed-7793122a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition" />
        </a>
        <a href="https://github.com/zunayed328" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
        <a href="mailto:mdzunayed2002@gmail.com">
          <FaEnvelope className="hover:text-red-600 transition" />
        </a>
      </div>
      <p className="mt-4 text-gray-600">Email: mdzunayed2002@gmail.com</p>
    </section>
  );
}
