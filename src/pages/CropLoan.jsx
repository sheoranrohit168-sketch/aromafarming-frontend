import React, { useState } from "react";

export default function CropLoan() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    aadhaar: "",
    amount: "",
    purpose: "",
  });

  const [emi, setEmi] = useState(null);
  const [calc, setCalc] = useState({ loan: "", rate: "", tenure: "" });

  // Form handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your crop loan application has been submitted!");
  };

  // EMI Calculator
  const handleCalcChange = (e) => {
    setCalc({ ...calc, [e.target.name]: e.target.value });
  };

  const calculateEMI = () => {
    const P = parseFloat(calc.loan);
    const R = parseFloat(calc.rate) / 12 / 100;
    const N = parseFloat(calc.tenure);

    if (!P || !R || !N) return;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="font-poppins text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Crop Loan</h1>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Empowering farmers with easy, affordable, and quick credit.  
          Get funds for seeds, fertilizers, machinery, irrigation, and more — repay flexibly after harvest.
        </p>
        <a
          href="#apply"
          className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition">
          Apply Now
        </a>
        <p className="bg-gray-50 py-5 px-6 text-center">
    Fill in your details below and our team will get in touch with you shortly.
  </p>
      </section>

      {/* Eligibility */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Eligibility Criteria</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Applicant must be a farmer (individual/joint).</li>
          <li>Age between 18 – 65 years.</li>
          <li>Must own/lease agricultural land.</li>
          <li>Past repayment record preferred.</li>
        </ul>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Documents Required</h2>
        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Aadhaar / Voter ID / PAN card</li>
            <li>Land ownership/lease papers</li>
            <li>Recent passport-size photographs</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Bank account statement (last 6 months)</li>
            <li>Kisan Credit Card (if any)</li>
            <li>Any existing loan record</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Aroma Crop Loan?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow p-8 rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">💰 Low Interest Rates</h3>
            <p>Affordable rates designed exclusively for farmers with flexible repayment.</p>
          </div>
          <div className="bg-white shadow p-8 rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">⚡ Quick Approval</h3>
            <p>Minimal paperwork, fast disbursal directly into your account.</p>
          </div>
          <div className="bg-white shadow p-8 rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">🌾 Extra Benefits</h3>
            <p>Insurance cover & interest rebate on timely repayment.</p>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">EMI Calculator</h2>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input
            type="number"
            name="loan"
            placeholder="Loan Amount (₹)"
            value={calc.loan}
            onChange={handleCalcChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="rate"
            placeholder="Interest Rate (%)"
            value={calc.rate}
            onChange={handleCalcChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="tenure"
            placeholder="Tenure (Months)"
            value={calc.tenure}
            onChange={handleCalcChange}
            className="w-full border px-3 py-2 rounded"
          />
          <button
            onClick={calculateEMI}
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Calculate EMI
          </button>
          {emi && (
            <p className="text-center text-xl font-semibold mt-4">
              Your Monthly EMI: ₹{emi}
            </p>
          )}
        </div>
      </section>


      {/* Apply Form */}
      <section id="apply" className="bg-gray-50 px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Apply for Crop Loan</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={form.aadhaar}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="amount"
            placeholder="Loan Amount (₹)"
            value={form.amount}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <select
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Purpose</option>
            <option value="seeds">Seeds</option>
            <option value="fertilizer">Fertilizer</option>
            <option value="equipment">Farm Equipment</option>
            <option value="irrigation">Irrigation</option>
            <option value="others">Others</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}
