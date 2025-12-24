export default function GovtSchemes() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
     

      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-700 text-center mb-4">
        Government Schemes for Farmers 🌾
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Explore major central and state government schemes available for farmers.
        Aroma Farming helps you stay informed and access benefits easily.
      </p>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* PM-KISAN */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            PM-KISAN Samman Nidhi
          </h3>
          <p className="text-gray-600 mb-4">
            Income support of ₹6,000 per year to eligible farmer families.
          </p>
          <a
            href="https://pmkisan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            Apply / Know More →
          </a>
        </div>

        {/* KCC */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Kisan Credit Card (KCC)
          </h3>
          <p className="text-gray-600 mb-4">
            Short-term credit support for crop cultivation and allied activities.
          </p>
          <a
            href="https://www.myscheme.gov.in/schemes/kcc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            Apply / Know More →
          </a>
        </div>

        {/* PMFBY */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            PM Fasal Bima Yojana
          </h3>
          <p className="text-gray-600 mb-4">
            Crop insurance against natural calamities and yield loss.
          </p>
          <a
            href="https://pmfby.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            Apply / Know More →
          </a>
        </div>

        {/* Soil Health Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Soil Health Card Scheme
          </h3>
          <p className="text-gray-600 mb-4">
            Provides soil nutrient status to help farmers improve productivity.
          </p>
          <a
            href="https://soilhealth.dac.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            Apply / Know More →
          </a>
        </div>

        {/* PMKSY */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Pradhan Mantri Krishi Sinchai Yojana
          </h3>
          <p className="text-gray-600 mb-4">
            Ensures irrigation access and water-use efficiency.
          </p>
          <a
            href="https://pmksy.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            Apply / Know More →
          </a>
        </div>

        {/* eNAM */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            e-NAM (National Agriculture Market)
          </h3>
          <p className="text-gray-600 mb-4">
            Online trading platform for better price discovery.
          </p>
          <a
            href="https://www.enam.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            Apply / Know More →
          </a>
        </div>

      </div>

      {/* Help Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Need Help Applying?
        </h3>
        <p className="text-gray-600 mb-6">
          Aroma Farming can guide you through eligibility and application
          processes.
        </p>
        <a
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition"
        >
          Contact Aroma Farming
        </a>
      </div>
    </div>
  );
}
