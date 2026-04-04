import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative -mt-px bg-[#0F2D8A] py-16 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="mb-4 inline-block rounded-xl bg-white px-4 py-3 shadow-sm"
              aria-label="ETC Polska — home"
            >
              <Image
                src="/images/ETC_Polska_Big.png"
                alt="ETC Polska"
                width={260}
                height={86}
                className="h-11 w-auto max-w-[200px] object-contain object-left"
              />
            </Link>
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
