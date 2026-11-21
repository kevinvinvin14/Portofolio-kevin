import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#161617]/85 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-[5vw]">
        <a
          href="#hero"
          className="flex items-center gap-3.5 text-[#f3f3f5] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]"
        >
          <div className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/20 bg-[#232427] text-sm font-bold text-[#f3f3f5] shadow-md">
            KR
          </div>
          <span className="text-sm font-bold tracking-tight whitespace-nowrap">
            Kevin Rajendra
          </span>
          <span className="font-mono-tech hidden items-center gap-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-2.5 py-1 text-[11px] font-medium text-[#22c55e] whitespace-nowrap sm:inline-flex">
            <span className="animate-pulse-dot h-[7px] w-[7px] rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
            <span>Available for Work</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#f3f3f5]/62 no-underline transition-colors duration-200 hover:text-[#f3f3f5] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono-tech inline-flex items-center justify-center rounded-md border border-[#f3f3f5] bg-[#f3f3f5] px-4 py-2 text-xs font-bold text-[#161617] no-underline transition-all duration-200 hover:-translate-y-px hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.28)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]"
          >
            Connect
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-[#1f2022] text-[#f3f3f5] transition-colors hover:border-white/30 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#161617]/95 px-[5vw] py-4 md:hidden">
          <div className="mb-3 flex items-center">
            <span className="font-mono-tech inline-flex items-center gap-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-2.5 py-1 text-[11px] text-[#22c55e]">
              <span className="animate-pulse-dot h-[7px] w-[7px] rounded-full bg-[#22c55e]" />
              <span>Available for Work</span>
            </span>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-[#f3f3f5]/80 no-underline transition-colors hover:bg-[#1f2022] hover:text-[#f3f3f5]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="font-mono-tech mt-2 inline-flex items-center justify-center rounded-md bg-[#f3f3f5] px-4 py-2.5 text-xs font-bold text-[#161617] no-underline"
            >
              Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
