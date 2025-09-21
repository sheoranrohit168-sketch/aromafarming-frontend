import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterSeller() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    businessType: "",
    gst: "",
    phone: "",
    email: "",
    address: "",
    bankAccount: "",
    ifsc: "",
    productCategory: "",
    description: "",
    images: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller Registration Data:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-100 flex flex-col items-center py-12 px-4">
      <motion.h1
        className="text-4xl font-bold text-green-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Register as Seller 🛒
      </motion.h1>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-green-700">
            Seller Information
          </h2>

          {/* Name / Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="p-3 border rounded-lg w-full"
              required
            />
          </div>

          {/* Business Type / GST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="">Select Business Type</option>
              <option value="Individual">Individual</option>
              <option value="Partnership">Partnership</option>
              <option value="Pvt Ltd">Private Limited</option>
              <option value="LLP">LLP</option>
            </select>
            <input
              type="text"
              name="gst"
              value={form.gst}
              onChange={handleChange}
              placeholder="GST Number (if applicable)"
              className="p-3 border rounded-lg w-full"
            />
          </div>

          {/* Phone / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 border rounded-lg w-full"
              required
            />
          </div>

          {/* Address */}
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Business Address"
            className="p-3 border rounded-lg w-full mt-4"
            required
          />

          {/* Bank Details */}
          <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">
            Bank Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="bankAccount"
              value={form.bankAccount}
              onChange={handleChange}
              placeholder="Bank Account Number"
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="ifsc"
              value={form.ifsc}
              onChange={handleChange}
              placeholder="IFSC Code"
              className="p-3 border rounded-lg w-full"
              required
            />
          </div>

          {/* Product Details */}
          <h2 className="text-xl font-semibold mt-6 mb-2 text-green-700">
            Product Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="productCategory"
              value={form.productCategory}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="">Select Product Category</option>
              <option value="Seeds">Seeds</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Machinery">Agro Machinery</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              accept="image/*"
              className="p-3 border rounded-lg w-full"
              required
            />
          </div>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="p-3 border rounded-lg w-full mt-4"
            required
          />

          {/* Agreement */}
          <div className="flex items-center mt-6">
            <input type="checkbox" required className="mr-2" />
            <p className="text-gray-600 text-sm">
              I agree to the{" "}
              <a href="/terms" className="text-green-700 underline">
                Terms & Conditions
              </a>
            </p>
          </div>
          
          

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg transition"
          >
            Register Now
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="mt-10 bg-white p-8 rounded-2xl shadow-xl text-center max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            ✅ Registration Submitted
          </h2>
          <p className="text-gray-700">
            Thank you for registering as a seller. Our team will verify your
            details and get in touch with you shortly.
          </p>
        </motion.div>
      )}
    </div>
  );
}
