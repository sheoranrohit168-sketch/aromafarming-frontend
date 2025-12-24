import React from "react";

const About = () => {
  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="shadow-md sticky top-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-lg font-semibold text-green-700">About Us</h1>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
        <p className="mb-4">
          Aroma Agro is built with one mission: to empower farmers with financial
          support, modern techniques, and direct access to markets. 
        </p>
        <p className="mb-4">
          We combine <strong>loans</strong>, <strong>consultancy</strong>, and 
          <strong> technology</strong> to reduce risks and maximize profitability
          for farmers across India.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Our Vision</h3>
            <p>
              To make farming sustainable and profitable for every small and 
              marginal farmer through innovation and accessibility.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p>
              Empowering farmers with knowledge, finance, and technology to 
              achieve prosperity and resilience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
