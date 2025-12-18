import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white flex justify-between items-center h-24" >
      <div className="h-full">
        <img 
          src="/img/logo.png" 
          className="h-full w-full object-contain-scale-x-100" 
          alt="Logo" 
        />
      </div>
      <ul className="flex gap-6 text-lg font-medium pr-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aroma-agro">Aroma Agro</Link></li>
        <li><Link to="/aroma-ecard">Aroma E-Card</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
