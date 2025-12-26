import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* 🔼 Logo (scrolls away) */}
      <div className="flex justify-center py-6 bg-[#FAF9F6]">
        <div className="relative">
          <img
            src="/img/logo.png"
            alt="Aroma Agro Logo"
            className="w-[720px] max-h-36 object-cover"
          />
          <img
            src="/img/butterfly.gif"
            alt="Butterfly"
            className="w-15 absolute top-2 left-12 butterfly-animate pointer-events-none"
          />
        </div>
      </div>

      {/* 📌 Sticky Navbar */}
      <nav className="bg-green-700 text-white h-16 flex items-center justify-center sticky top-0 z-[999] shadow-md">
        <ul className="flex gap-4 text-base font-medium">
          
          <li>
            <Link
              to="/"
              className="px-3 py-1.5 text-sm rounded-md bg-green-600 hover:bg-green-500 transition shadow-sm"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/register-seller"
              className="px-3 py-1.5 text-sm rounded-md bg-green-600 hover:bg-green-500 transition shadow-sm"

            >
              Aroma Agro
            </Link>
          </li>

          <li>
            <Link
              to="/govt-schemes"
              className="px-3 py-1.5 text-sm rounded-md bg-green-600 hover:bg-green-500 transition shadow-sm"

            >
              Government Schemes
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="px-3 py-1.5 text-sm rounded-md bg-green-600 hover:bg-green-500 transition shadow-sm"

            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="px-3 py-1.5 text-sm rounded-md bg-green-600 hover:bg-green-500 transition shadow-sm"

            >
              About
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}
