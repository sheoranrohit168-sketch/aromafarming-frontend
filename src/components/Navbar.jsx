import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* 🔼 Logo (scrolls away) */}
      <div className="flex justify-center py-4 bg-white">
        <img
          src="/img/logo.png"
          alt="Aroma Farming Logo"
          className="h-20 object-contain"
        />
      </div>

      {/* 📌 Sticky Navbar */}
      <nav className="bg-green-700 text-white h-16 flex items-center justify-center 
                      sticky top-0 z-[999] shadow-md">
        <ul className="flex gap-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/register-seller" className="hover:text-yellow-300">Aroma Agro</Link></li>
          <li><Link to="/govt-schemes" className="hover:text-yellow-300">Government Schemes</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
        </ul>
      </nav>
    </>
  );
}
