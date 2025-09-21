import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    captcha: "",
    agree: false,
  });

  const [captchaQuestion, setCaptchaQuestion] = useState(generateCaptcha());
  const [error, setError] = useState("");

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { question: `${num1} + ${num2}`, answer: (num1 + num2).toString() };
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (form.captcha !== captchaQuestion.answer) {
      setError("Captcha is incorrect!");
      return;
    }

    if (!form.agree) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    console.log("✅ Form Submitted:", form);
    alert("Sign Up Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Create Your Account
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />

          {/* CAPTCHA */}
          <div className="flex items-center space-x-3">
            <span className="font-medium">{captchaQuestion.question} = ?</span>
            <input
              type="text"
              name="captcha"
              value={form.captcha}
              onChange={handleChange}
              required
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
              required
            />
            I agree to the
            <a
              href="/terms"
              target="_blank"
              className="text-green-700 underline ml-1"
            >
              Terms & Conditions
            </a>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-green-700 font-medium">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
