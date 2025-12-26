export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 px-4 py-8">

        {/* Logo + Name */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/img/logo2.png"
              alt="Aroma Agro Logo"
              className="h-20 w-auto bg-white rounded p-1"
            />
          </div>  
            <h4 className="font-bold text-lg">Aroma Agro</h4>
          <p className="text-sm">
            Innovation at every acre.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/partners" className="hover:underline">
                Our Partners
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-sm">Phone: +91 7496833173</p>
          <p className="text-sm">Email: aromaagro@gmail.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded text-black w-full text-sm"
          />
          <button className="mt-2 bg-white text-green-700 px-4 py-2 rounded w-full text-sm font-semibold hover:bg-gray-100">
            Subscribe
          </button>
        </div>

      </div>

      <div className="text-center bg-green-800 py-2 text-sm">
        © 2025 Aroma Agro — All rights reserved.
      </div>
    </footer>
  );
}

