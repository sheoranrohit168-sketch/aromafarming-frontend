import React from "react";

export default function EquipmentFinancing() {
  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Equipment Financing</h1>
        <p className="mt-2 text-lg">
          Finance tractors, harvesters, and farm machinery with flexible EMIs.
        </p>
      </header>

      {/* Intro */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Why Equipment Financing?</h2>
        <p className="mb-6">
          We provide easy and affordable financing solutions for farmers to
          purchase modern equipment. With simple paperwork and quick approvals,
          we make sure you get the right tools to improve productivity and
          reduce manual effort.
        </p>
      </section>

      {/* Financing Options */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Financing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Tractor Loans</h3>
              <p>
                Affordable tractor loans with up to 7-year tenure and flexible
                repayment plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Harvester Financing</h3>
              <p>
                Easy loans for harvesters with buyback options and EMI holidays
                during off-season.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Farm Tools & Implements</h3>
              <p>
                Finance for seeders, tillers, irrigation systems, and other farm
                implements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Low-interest rates with flexible repayment options</li>
          <li>Minimal paperwork and quick approval process</li>
          <li>EMI holiday during non-harvest months</li>
          <li>Insurance cover for financed equipment</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Farmer must own or lease agricultural land</li>
            <li>Valid KYC documents (Aadhaar, PAN, Voter ID)</li>
            <li>Age between 21 and 65 years</li>
            <li>Past repayment history (if any) considered</li>
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Identity Proof: Aadhaar Card / Voter ID / PAN</li>
          <li>Address Proof: Ration Card / Utility Bill</li>
          <li>Land Ownership or Lease Documents</li>
          <li>2 Passport Size Photographs</li>
        </ul>
      </section>

      {/* Apply Now */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
          <p className="mb-6">
            Get financing for your tractors, harvesters, and other farm
            equipment. Apply now with minimum documents.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
