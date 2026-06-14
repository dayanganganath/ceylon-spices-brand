export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-900">
        About Ceylon Spices Brand
      </h1>

      <p className="mt-6 text-gray-700 leading-8">
        dayan
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 shadow rounded-lg">
          <h2 className="font-bold text-xl">Our Mission</h2>
          <p className="mt-3">To deliver authentic Ceylon spices with reliable quality.</p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h2 className="font-bold text-xl">Our Vision</h2>
          <p className="mt-3">To become a trusted Sri Lankan spice brand for global buyers.</p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h2 className="font-bold text-xl">Quality</h2>
          <p className="mt-3">Selected, packed, and supplied with care and consistency.</p>
        </div>
      </div>
    </main>
  );
}