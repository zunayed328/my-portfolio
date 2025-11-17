import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="p-5 bg-white shadow-md rounded-lg hover:scale-105 transform transition">
          Project 1
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg hover:scale-105 transform transition">
          Project 2
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg hover:scale-105 transform transition">
          Project 3
        </div>
      </div>
    </section>
  );
}
