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
          Aroma Agro is built with one mission: to empower farmers with access to
          genuine agro-inputs, practical knowledge, and modern technology.
        </p>

        <p className="mb-4">
          We focus on providing <strong>certified seeds</strong>,{" "}
          <strong>trusted agrochemicals</strong>, and a{" "}
          <strong>farmer-friendly digital platform</strong> that simplifies
          decision-making and builds trust in agri-input markets.
        </p>

        {/* Vision & Mission */}
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
              Empowering farmers with genuine inputs, clear information, and
              technology that supports confident farming decisions.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">
            Founder – Aroma Agro
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/img/logo2.png"
              alt="Rohit Sheoran - Founder of Aroma Agro"
              className="w-36 h-36 object-cover rounded-full shadow"
            />

            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-1">
                Rohit Sheoran
              </h4>
              <p className="text-sm text-gray-500 mb-3">
                Founder & Product Lead
              </p>

              <p className="text-gray-700 leading-relaxed mb-2">
                Aroma Agro was founded with a simple belief — farmers deserve
                access to genuine products and clear guidance without confusion
                or dependency on middlemen.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The initiative is driven by on-ground understanding of farming
                challenges and a commitment to build trust through transparency
                and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
