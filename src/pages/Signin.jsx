import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Sign In
        </h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border p-3 rounded-md" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded-md" />
          <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 font-medium">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
