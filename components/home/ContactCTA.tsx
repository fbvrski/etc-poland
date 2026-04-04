import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-[#091D5E] via-[#0F2D8A] to-[#0F2D8A] text-white py-20 text-center">
      <div className="container-custom max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 leading-tight">
          Plan your next development with confidence
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get expert transport consultancy from the earliest stages of your project
        </p>
        <Link href="/contact" className="btn btn-primary btn-lg bg-white text-[#0F2D8A] hover:bg-gray-100 hover:shadow-xl">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
