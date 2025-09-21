import React from "react";

export default function GovtSchemes() {
  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Government Schemes</h1>
        <p className="mt-2 text-lg">
          Exclusive schemes and benefits available for Aroma E-Card holders.
        </p>
      </header>

      {/* Intro */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why Check Government Schemes?
        </h2>
        <p className="mb-6">
          Farmers can benefit from multiple government initiatives such as crop
          insurance, subsidies, low-interest loans, and modern farming support.
          Aroma E-Card holders get priority assistance in accessing and applying
          for these schemes.
        </p>
      </section>

      {/* Schemes List */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Popular Government Schemes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)
              </h3>
              <p>
                Direct financial support of ₹6,000 annually to small and
                marginal farmers. Aroma E-Card users get faster application
                support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                PM Fasal Bima Yojana (PMFBY)
              </h3>
              <p>
                Crop insurance against natural calamities, pests, and diseases.
                Aroma E-Card holders get guided claim assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Kisan Credit Card (KCC)
              </h3>
              <p>
                Easy credit access at lower interest rates for buying seeds,
                fertilizers, and other inputs. Extra benefits with Aroma
                membership.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Soil Health Card Scheme
              </h3>
              <p>
                Free soil testing to guide farmers on fertilizer use. Aroma
                E-Card holders can book priority testing slots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for E-Card Holders */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Extra Benefits with Aroma E-Card
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Dedicated support team for scheme applications</li>
          <li>Fast-tracked access to government subsidies</li>
          <li>Free documentation assistance for loans & insurance</li>
          <li>Exclusive 5% discount on Aroma products (for ₹1 lakh+ buyers)</li>
        </ul>
      </section>

      {/* Apply Button */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Apply for a Scheme</h2>
          <p className="mb-6">
            If you are an Aroma E-Card holder, you can apply for government
            schemes with our expert guidance.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
