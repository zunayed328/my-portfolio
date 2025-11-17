import React from "react";
import profilePic from "../assets/zunayed.jpg"; // make sure this path matches your file

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white px-5"
    >
      {/* Left side: text */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl">
          I am a Web Developer & AI Enthusiast.
        </p>
      </div>

      {/* Right side: profile image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={profilePic}
          alt="Zunayed"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg animate-fade-in"
        />
      </div>
    </section>
  );
}
