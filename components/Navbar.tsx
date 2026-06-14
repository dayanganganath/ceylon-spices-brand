import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ceylon Spices Brand"
            width={50}
            height={50}
            className="rounded-full"
          />

          <span className="text-2xl font-bold tracking-wide">
            Ceylon Spices
          </span>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-amber-300 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-amber-300 transition">
            About
          </Link>

          <Link href="/products" className="hover:text-amber-300 transition">
            Products
          </Link>

          <Link href="/contact" className="hover:text-amber-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}