export default function Footer() {
  return (
          <footer className="bg-green-700 text-white mt-12">
        <div className="container mx-auto grid md:grid-cols-4 gap-6 px-4 py-8">
          <div>
            <h4 className="font-bold">Aroma Farming</h4>
            <p>Empowering farmers with finance, guidance & market intelligence.</p>
          </div>
          <div>
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/partners" className="hover:underline">Our Partners</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <p>Phone: +91 7496833173</p>
            <p>Email: aromafarming@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-black w-full"
            />
            <button className="mt-2 bg-white text-green-700 px-4 py-2 rounded w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center bg-green-800 py-2">
          © 2025 Aroma Farming — All rights reserved.
        </div>
      </footer>
  );
}
