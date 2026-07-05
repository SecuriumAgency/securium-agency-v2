import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden">
      {/* Halo subtil en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Colonne Marque */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/securium-favicon.png"
                alt="Securium Logo"
                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              />
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm mb-6">
              De l&apos;audit de votre infrastructure à la conception de votre identité web. Solutions IT & Digitales sur-mesure.
            </p>
          </div>

          {/* Colonne Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-zinc-400 hover:text-brand-500 transition-colors">Nos Services</Link></li>
              <li><Link href="/blog" className="text-zinc-400 hover:text-brand-500 transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-brand-500 transition-colors">À Propos</Link></li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact</h4>
            <ul className="space-y-4">
              <li><a href="mailto:contact@securium-agency.fr" className="text-zinc-400 hover:text-brand-500 transition-colors">contact@securium-agency.fr</a></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-brand-500 transition-colors">Planifier une consultation</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Securium Digital Agency. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-zinc-500 hover:text-white text-sm transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="text-zinc-500 hover:text-white text-sm transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
