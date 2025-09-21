import React from "react";

export default function Consultancy() {
  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="bg-green-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Consultancy & Planning</h1>
        <p className="mt-2 text-lg">
          Expert agronomists to guide you with soil testing, crop planning, and
          market linkages.
        </p>
      </header>

      {/* Intro */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Why Consultancy?</h2>
        <p className="mb-6">
          Every farm is unique, and expert guidance can make a big difference in
          yield and profitability. Our consultancy services empower farmers with
          the right knowledge to maximize productivity, minimize risks, and
          secure better prices in the market.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Consultancy Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Soil Testing</h3>
              <p>
                Detailed soil analysis to identify nutrient levels and recommend
                the right fertilizers and practices for maximum yield.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Crop Planning</h3>
              <p>
                Personalized crop rotation and seasonal planning to ensure
                sustainable and profitable farming.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Market Linkages</h3>
              <p>
                Direct connections with buyers, wholesalers, and retailers to
                maximize profitability and reduce middlemen costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Increase crop yield with expert recommendations</li>
          <li>Reduce input costs with efficient planning</li>
          <li>Access to real-time market insights</li>
          <li>Improve long-term soil health</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Who Can Benefit?</h2>
          <p>
            Our consultancy services are designed for small, marginal, and
            large-scale farmers who wish to improve their productivity,
            profitability, and sustainability.
          </p>
        </div>
      </section>

      {/* Book Consultation */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Book Your Consultation</h2>
          <p className="mb-6">
            Schedule a one-on-one consultation with our expert agronomists and
            take the next step toward successful farming.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
