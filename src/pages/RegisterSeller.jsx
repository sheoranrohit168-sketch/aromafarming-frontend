export default function RegisterSeller() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-700 text-center mb-4">
        Seller Registration
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Join <strong>Aroma Agro</strong> as a verified seller and reach farmers
        across India. Register through the form below to start selling seeds,
        fertilizers, agrochemicals, and farm equipment.
      </p>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          🌱 <h3 className="font-semibold mt-2">Wide Farmer Reach</h3>
          <p className="text-sm text-gray-600 mt-1">
            Connect with farmers across regions.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          💰 <h3 className="font-semibold mt-2">Low Entry Cost</h3>
          <p className="text-sm text-gray-600 mt-1">
            Start selling with minimal charges.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          📦 <h3 className="font-semibold mt-2">Easy Onboarding</h3>
          <p className="text-sm text-gray-600 mt-1">
            Simple form-based registration.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          🤝 <h3 className="font-semibold mt-2">Trusted Platform</h3>
          <p className="text-sm text-gray-600 mt-1">
            Verified sellers for quality assurance.
          </p>
        </div>
      </div>

      {/* Google Form Button */}
      <div className="text-center">
        <a
          href="https://forms.gle/YOUR_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
        >
          Register via Google Form
        </a>

        <p className="text-sm text-gray-500 mt-4">
          Our team will review your application and contact you within 48 hours.
        </p>
      </div>
    </div>
  );
}
