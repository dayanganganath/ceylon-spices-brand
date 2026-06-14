export default function Home() {
  return (
    <main className="bg-[#fff8ed]">
      <section className="min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-br from-green-950 via-green-900 to-amber-900">
        <div className="max-w-4xl text-center text-white">
          <p className="uppercase tracking-[0.35em] text-amber-300 mb-4">
            Pure Ceylon Taste
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Premium Sri Lankan Spices
          </h1>

          <p className="mt-6 text-lg md:text-xl text-amber-50">
            Authentic cinnamon, pepper, cloves, cardamom, and more — sourced
            from trusted Sri Lankan growers.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/products"
              className="bg-amber-500 text-green-950 px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition"
            >
              Explore Products
            </a>

            <a
              href="/contact"
              className="border border-amber-300 text-amber-100 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-950 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-green-950">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            "100% Sri Lankan",
            "Premium Quality",
            "Export Ready",
            "Fast Delivery",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <h3 className="font-bold text-lg text-green-900">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}