import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className="font-poppins text-gray-800">
      <Helmet>
        <title>Aroma Agro | Innovation at every acre</title>
        <meta
          name="description"
          content="Armo Agro supports farmers with crop loans, equipment financing, consultancy and access to government schemes."
        />
      </Helmet>

      {/* HERO + STATS (gap reduced) */}
      <section className="container mx-auto grid md:grid-cols-2 gap-6 px-6 py-14">
        {/* LEFT */}
        <div className="bg-emerald-50 p-8 rounded-2xl fade-up">
          <h1 className="text-3xl md:text-4xl  text-emerald-700 mb-4 leading-snug">
            Inovation at every acre
            <br />
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Aroma Agro</strong> helps farmers deal with finance,
            planning and schemes — without confusion or pressure.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We guide you through decisions that affect your crop,
            your income and your future.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/about"
              className="bg-emerald-600 text-white px-5 py-3 rounded-lg hover:bg-emerald-700 transition"
            >
              Know More
            </Link>
            <Link
              to="/consultancy"
              className="border border-emerald-600 text-emerald-700 px-5 py-3 rounded-lg hover:bg-emerald-100 transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* RIGHT – STATS */}
        <div className="grid grid-cols-2 gap-4 bg-white p-8 rounded-2xl fade-up fade-delay-1 text-center">
          <div className="hover-lift p-4 rounded-xl bg-emerald-50">
            <p className="text-3xl font-bold text-emerald-700">
              <Counter end={2} />
            </p>
            <p className="text-sm mt-1 text-gray-600">
              Farmers Guided
            </p>
          </div>

          <div className="hover-lift p-4 rounded-xl bg-emerald-50">
            <p className="text-3xl font-bold text-emerald-700">
              ₹<Counter end={1} /> L
            </p>
            <p className="text-sm mt-1 text-gray-600">
              Finance Facilitated
            </p>
          </div>

          <div className="col-span-2 hover-lift p-4 rounded-xl bg-emerald-50">
            <p className="text-3xl font-bold text-emerald-700">
              <Counter end={95} />%
            </p>
            <p className="text-sm mt-1 text-gray-600">
              Farmers Felt More Confident
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10 fade-up">
            How Farmers Use Armo Agro
          </h2>

          <div className="grid md:grid-cols-4 gap-5 text-center">
            {[
              ["Share Your Need", "Loan, machinery, advice or schemes"],
              ["Get Clear Guidance", "Simple explanations, no jargon"],
              ["Apply Confidently", "Only what fits your situation"],
              ["Ongoing Support", "We stay connected after approval"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl hover-lift fade-up fade-delay-2"
              >
                <p className="font-semibold mb-2">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10 fade-up">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/img/loan.png",
                title: "Crop Loans",
                text: "Loans aligned with sowing and harvesting cycles.",
                link: "/crop-loan",
              },
              {
                img: "/img/equ.png",
                title: "Equipment Financing",
                text: "Tractors and tools with manageable EMIs.",
                link: "/equipment-financing",
              },
              {
                img: "/img/consult.png",
                title: "Consultancy & Planning",
                text: "Crop planning, soil insights and market awareness.",
                link: "/consultancy",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl text-center hover-lift fade-up"
              >
                <img src={s.img} className="h-20 mx-auto mb-4" />
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-3">{s.text}</p>
                <Link
                  to={s.link}
                  className="text-emerald-600 font-medium mt-4 block"
                >
                  Know more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* DOWNLOAD ARMO AGRO APP – INPUT PURCHASE */}
<section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-900 py-20">

  {/* soft background shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-600/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

  <div className="relative container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-white animate-fade-up">
      <h2 className="text-4xl font-bold mb-5 leading-snug">
        Buy Seeds & Agrochemicals  
        <br />
        with the Aroma Agro App 
      </h2>

      <p className="text-emerald-100 mb-6 leading-relaxed max-w-lg">
        The Aroma Agro app helps farmers purchase
        <strong> certified seeds </strong> and
        <strong> genuine agrochemicals </strong>
        directly from trusted sellers — without confusion or middlemen.
      </p>

      <ul className="space-y-3 text-emerald-100 text-sm mb-8">
        <li className="animate-fade-up animate-delay-1">
          ✔ Verified seeds & crop protection products
        </li>
        <li className="animate-fade-up animate-delay-2">
          ✔ Clear usage instructions & dosage guidance
        </li>
        <li className="animate-fade-up animate-delay-3">
          ✔ Transparent pricing from trusted sellers
        </li>
        <li className="animate-fade-up animate-delay-3">
          ✔ Designed for simple phones & rural networks
        </li>
      </ul>

      <a
        href="https://play.google.com/store/apps/details?id=armoagro.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition shadow-lg"
      >
        Download Aroma Agro App →
      </a>

      <p className="text-xs text-emerald-200 mt-4">
        *Currently not available. More features coming soon.
      </p>
    </div>

    {/* RIGHT INFO CARD */}
    <div className="animate-fade-up animate-delay-1">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white shadow-xl">
        <h3 className="text-xl font-semibold mb-5">
          Why farmers use the Aroma Agro app
        </h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 p-4 rounded-xl">
            🧪 <strong>Genuine Products</strong>
            <p className="text-emerald-100 mt-1">
              Avoid fake or expired chemicals
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            🌾 <strong>Right Seed Choice</strong>
            <p className="text-emerald-100 mt-1">
              Select seeds suited to your crop & season
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            📦 <strong>Doorstep Access</strong>
            <p className="text-emerald-100 mt-1">
              Order from anywhere, anytime
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            🤝 <strong>Farmer-Friendly</strong>
            <p className="text-emerald-100 mt-1">
              Simple app, clear language
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

    </div>
  );
};

export default Home;
