import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 bg-white text-center">
      <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
      <p className="mb-4">Email: <a href="mailto:mdzunayed2002@gmail.com">mdzunayed2002@gmail.com</a></p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/mohammad-zunayed-7793122a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/zunayed328" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:mdzunayed2002@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
