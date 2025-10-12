import React from "react";
import { Title, Meta } from "react-head";

const Home = () => {
  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="shadow-md sticky top-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-2 py-1 text-sm"
            />
            <button className="md:hidden text-2xl">☰</button>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="container mx-auto grid md:grid-cols-2 gap-6 px-4 py-12">
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <p className="mb-4">
            Aroma Farming is a farmer-first platform offering crop loans,
            equipment financing, consultancy and risk management solutions. We
            combine easy finance, practical training and real-time market
            insights so small and marginal farmers can flourish.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fast loan approvals with guidance</li>
            <li>Expert agronomy & market advisory</li>
            <li>Insurance & risk mitigation</li>
          </ul>
          <a
            href="/about"
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow text-center">
          <div>
            <strong className="text-xl">---</strong>
            <p className="text-sm">Farmers helped</p>
          </div>
          <div>
            <strong className="text-xl">---</strong>
            <p className="text-sm">Loans disbursed</p>
          </div>
          <div>
            <strong className="text-xl">---</strong>
            <p className="text-sm">Customer satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-8">
            Our Key Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <img src="/img/loan.png" alt="Crop Loans" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold">Crop Loans</h3>
              <p className="text-sm my-2">
                Flexible small-ticket and seasonal loans tailored to crop cycles.
              </p>
              <a href="/crop-loan" className="hover:text-green-600 font-medium">
                Apply now →
              </a>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <img src="/img/equ.png" alt="Equipment Financing" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold">Equipment Financing</h3>
              <p className="text-sm my-2">
                Finance tractors, harvesters and farm equipment with easy EMIs.
              </p>
              <a href="/equipment-financing" className="text-green-600 font-medium">
                View options →
              </a>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <img src="/img/consult.png" alt="Consultancy" className="h-20 mx-auto mb-4" />
              <h3 className="font-bold">Consultancy & Planning</h3>
              <p className="text-sm my-2">
                Soil testing, crop planning and market linkages from experts.
              </p>
              <a href="/consultancy" className="text-green-600 font-medium">
                Book consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Live Market Snapshot</h2>
        <div id="liveDataList" className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">
            Loading market data...
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow p-4 rounded-lg">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Ravi"
                className="h-32 w-32 rounded-full mx-auto"
              />
              <blockquote className="italic text-center mt-4">
                “With Kisan Sathi's loan and guidance I diversified into
                vegetables. My income increased 3x in two seasons.” <br />
                <cite className="text-sm">— Ravi, Haryana</cite>
              </blockquote>
            </div>
            <div className="bg-white shadow p-4 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Meera"
                className="h-32 w-32 rounded-full mx-auto"
              />
              <blockquote className="italic text-center mt-4">
                “Consultation on seed selection and timely market advice helped
                me avoid losses.” <br />
                <cite className="text-sm">— Meera, Punjab</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-6">Learn with Videos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <iframe
              className="w-full h-56 rounded-lg"
              src="https://www.youtube.com/embed/HX3G3w1s1_0"
              title="Modern Farming Techniques"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4 className="mt-2 font-medium">Modern Farming Techniques</h4>
          </div>
          <div>
            <iframe
              className="w-full h-56 rounded-lg"
              src="https://www.youtube.com/embed/6Xc5C1W2c0A"
              title="How to Apply for Crop Loans"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4 className="mt-2 font-medium">How to Apply for Crop Loans</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
