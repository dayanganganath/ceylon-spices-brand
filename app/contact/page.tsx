export default function Contact() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="min-h-screen bg-gradient-to-r from-black/70 to-green-950/60 flex items-center justify-center px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-10 max-w-3xl w-full shadow-2xl border border-white/30">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            Contact Us
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Contact us for retail, wholesale, export, and bulk spice inquiries.
          </p>

          <div className="space-y-5 text-lg">
            <p>
              📱 <strong>WhatsApp:</strong> +94 77 850 4044
            </p>

            <p>
              📧 <strong>Email:</strong> ceylonspicesbrand@gmail.com
            </p>

            <p>
              📍 <strong>Location:</strong> Sri Lanka
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/94778504044"
              target="_blank"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              📱 WhatsApp Us
            </a>

            <a
              href="mailto:ceylonspicesbrand@gmail.com?subject=Inquiry from Ceylon Spices Brand Website"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}