import Image from "next/image";

const products = [
  { name: "Ceylon Cinnamon", image: "/images/cinnamon.jpg" },
  { name: "Black Pepper", image: "/images/pepper.jpg" },
  { name: "Cloves", image: "/images/cloves.jpg" },
  { name: "Cardamom", image: "/images/cardamom.jpg" },
  { name: "Nutmeg", image: "/images/nutmeg.jpg" },
  { name: "Turmeric", image: "/images/turmeric.jpg" },
];

export default function Products() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-900 text-center">
        Our Products
      </h1>

      <p className="text-center mt-4 text-gray-600">
        Premium Sri Lankan spices selected for quality, aroma, and freshness.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {products.map((product) => (
          <div key={product.name} className="rounded-lg shadow-lg p-6 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold text-green-900">
              {product.name}
            </h2>

            <p className="mt-3 text-gray-600">
              High-quality {product.name} sourced from trusted Sri Lankan growers.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}