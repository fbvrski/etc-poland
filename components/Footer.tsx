import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2D8A] text-white py-20 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center justify-center bg-white/10 rounded-lg px-6 py-3 w-fit mb-4">
              <span className="text-white font-display font-bold text-2xl tracking-tight">etc</span>
            </div>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              Expert transport consultancy for development projects across Europe and beyond. Since 2002.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Navigate</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-white/90 text-sm hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-white/90 text-sm hover:text-white transition-colors">Services</Link>
              <Link href="/projects" className="text-white/90 text-sm hover:text-white transition-colors">Projects</Link>
              <Link href="/contact" className="text-white/90 text-sm hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li>Development advice</li>
              <li>Traffic & transport planning</li>
              <li>Infrastructure design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-white/90">
              <a href="mailto:info@etc-transport.com" className="hover:text-white transition-colors">info@etc-transport.com</a>
              <Link href="/contact" className="hover:text-white transition-colors font-semibold">Contact form →</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} ETC Polska Sp. z o.o. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
