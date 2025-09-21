import React from "react";

const Contact = () => {
  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="shadow-md sticky top-0 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-lg font-semibold text-green-700">Contact Us</h1>
        </div>
      </header>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">We’d love to hear from you!</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white shadow rounded-lg p-6">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2 mb-4"/>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 mb-4"/>
            <label className="block mb-2">Message</label>
            <textarea className="w-full border rounded px-3 py-2 mb-4" rows="4"></textarea>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Our Office</h3>
            <p>Hisar, Haryana, India</p>
            <p>Email: support@kisansathi.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
