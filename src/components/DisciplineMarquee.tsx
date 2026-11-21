import { MARQUEE_ITEMS } from '../data/portfolioData';

export function DisciplineMarquee() {
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Core disciplines"
      className="marquee-wrapper relative overflow-hidden border-y border-white/12 bg-[#1b1c1e] py-[18px] whitespace-nowrap"
    >
      <div className="animate-marquee inline-flex gap-10">
        {repeatedItems.map((item, idx) => (
          <span
            key={`${item.label}-${idx}`}
            className={`font-mono-tech inline-flex items-center gap-6 text-[13px] tracking-[0.14em] uppercase ${
              item.muted ? 'text-[#f3f3f5]/45' : 'text-[#f3f3f5]'
            }`}
          >
            <span>{item.label}</span>
            <span className="font-bold text-[var(--accent)]" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
