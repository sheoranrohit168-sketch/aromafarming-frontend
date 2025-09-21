import { Link } from "react-router-dom";

export default function AromaAgro() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        <img 
          src="/img/logo.png" className="h-20 w-auto mx-auto mb-8" 
          alt="Aroma Agro" 
        />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Seeds */}
        <Link to="/signin" className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">🌱 Seeds</h2>
          <p className="text-gray-600">Buy and sell high-quality seeds for better yields.</p>
        </Link>

        {/* Fertilizers */}
        <Link to="/signin" className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">🧪 Fertilizers</h2>
          <p className="text-gray-600">Boost your crop growth with trusted fertilizers.</p>
        </Link>

        {/* Agrochemicals */}
        <Link to="/signin" className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">🧴 Agrochemicals</h2>
          <p className="text-gray-600">Protect crops with pesticides, herbicides, and more.</p>
        </Link>

        {/* Equipments & Machines */}
        <Link to="/signin" className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-2">⚙️ Equipment & Machines</h2>
          <p className="text-gray-600">Find and trade farm tools, tractors, and machinery.</p>
        </Link>
      </div>

      {/* Register as Seller Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Want to Sell Your Products?
        </h3>
        <Link
          to="/register-seller"
          className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition"
        >
          Register as Seller
        </Link>
      </div>
    </div>
  );
}
