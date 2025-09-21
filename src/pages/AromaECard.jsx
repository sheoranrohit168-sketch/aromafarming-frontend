import { useState } from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

export default function AromaECard() {
  const [form, setForm] = useState({ name: "", email: "", purchase: "" });
  const [eligible, setEligible] = useState(null);
  const [applied, setApplied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(form.purchase) >= 100000) {
      setEligible(true);
      setApplied(true);
    } else {
      setEligible(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center py-12 px-4">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-green-800 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Aroma E-Card 💳
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-700 max-w-2xl text-center mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Unlock exclusive benefits with the <b>Aroma Agro E-Card</b>.  
        Customers who have purchased items worth{" "}
        <span className="font-bold text-green-700">₹1,00,000+</span>  
        get a special{" "}
        <span className="font-bold text-red-600">5% Extra Discount</span> 🎉
      </motion.p>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Application Form */}
        {!applied && (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-700">
              Apply for E-Card
            </h2>

            <label className="block mb-2 text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <label className="block mb-2 text-gray-600">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <label className="block mb-2 text-gray-600">
              Total Purchases from Aroma Agro (₹)
            </label>
            <input
              type="number"
              name="purchase"
              value={form.purchase}
              onChange={handleChange}
              required
              className="w-full p-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition"
            >
              Apply Now
            </button>
          </motion.form>
        )}

        {/* Government Schemes Box */}
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md text-center flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-xl font-bold mb-3 text-green-700">
            Government Schemes
          </h3>
          <p className="mb-4 text-gray-700">
            Check available subsidies, loans, and benefits for Aroma E-Card
            holders.
          </p>
          <a
            href="/govt-schemes"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Explore Government Schemes →
          </a>
        </motion.div>
      </div>

      {/* Eligibility Result */}
      {applied && eligible && (
        <motion.div
          className="mt-10 bg-white p-8 rounded-2xl shadow-xl text-center max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎉 Congratulations!
          </h2>
          <p className="text-gray-700 mb-6">
            You are eligible for the <b>Aroma E-Card</b>.  
            Enjoy{" "}
            <span className="text-red-600 font-bold">5% Extra Discount</span>{" "}
            on all purchases.
          </p>

          {/* QR Code for E-Card */}
          <div className="flex justify-center mb-4">
            <QRCodeSVG
              value={`Aroma E-Card - ${form.name} (${form.email})`}
              size={128}
            />
          </div>

          <p className="text-green-600 font-semibold">
            Your E-Card is activated ✅
          </p>
        </motion.div>
      )}

      {applied && eligible === false && (
        <motion.div
          className="mt-10 bg-red-50 p-6 rounded-xl shadow-md text-center max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-red-600 mb-2">❌ Not Eligible</h2>
          <p className="text-gray-700">
            You need to purchase items worth <b>₹1,00,000+</b> from Aroma Agro to
            unlock the E-Card benefits.
          </p>
        </motion.div>
      )}
    </div>
  );
}
