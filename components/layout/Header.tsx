"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "A Propos", href: "/about" },
  { label: "Nos services – Securium", href: "/services" },
  { label: "Contactez nous pour un devis gratuit !", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[100] bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" prefetch={false} aria-label="Retour à l'accueil Securium">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/securium-favicon.png"
            alt="Securium"
            className="w-16 h-16 md:w-20 md:h-20 object-contain object-left drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-transform hover:scale-110"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="text-sm text-zinc-300 hover:text-brand-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            prefetch={false}
            className="relative hidden overflow-hidden rounded-full border border-brand-500/50 bg-transparent px-6 py-2 text-sm font-bold tracking-wide text-brand-500 transition-all duration-300 hover:bg-brand-500 hover:text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] sm:inline-flex"
          >
            Devis gratuit
          </Link>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="lg:hidden text-white"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-black/40 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className="text-zinc-200 hover:text-brand-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                prefetch={false}
                className="relative w-fit overflow-hidden rounded-full border border-brand-500/50 bg-transparent px-6 py-2 text-sm font-bold tracking-wide text-brand-500 transition-all duration-300 hover:bg-brand-500 hover:text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                onClick={() => setIsOpen(false)}
              >
                Devis gratuit
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
