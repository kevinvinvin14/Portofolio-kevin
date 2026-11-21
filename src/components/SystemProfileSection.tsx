import { Code2, Layers, Lock, Music } from 'lucide-react';
import { useState } from 'react';
import { EDUCATION_LIST, INTEREST_ITEMS } from '../data/portfolioData';

const INTEREST_ICONS: Record<string, typeof Lock> = {
  'cyber-security': Lock,
  'software-eng': Code2,
  'multimedia-ops': Layers,
  'stage-foh': Music,
};

export function SystemProfileSection() {
  const [selectedInterestId, setSelectedInterestId] = useState<string>('software-eng');
  const activeInterest = INTEREST_ITEMS.find((item) => item.id === selectedInterestId);

  return (
    <section id="about" className="mx-auto max-w-[1240px] px-[5vw] py-[110px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-white/18 pb-4">
        <div>
          <span className="font-mono-tech mb-1.5 block text-xs tracking-[0.08em] text-[var(--accent)]">
            01 / ABOUT &amp; BACKGROUND
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] font-bold text-[#f3f3f5]">
            SYSTEM PROFILE
          </h2>
        </div>
        <div className="font-mono-tech text-xs text-[#f3f3f5]/62">
          Cengkareng, Jakarta Barat · ID
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.85fr]">
        {/* Left Column: Inspector Panel */}
        <div className="relative rounded-xl border border-white/18 bg-[#1f2022] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="mb-6 flex items-center justify-between border-b border-white/8 pb-3.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            </div>
            <span className="font-mono-tech text-xs text-[#f3f3f5]/62">
              kevin_rajendra.profile.json
            </span>
          </div>

          <h3 className="mb-4 text-[22px] leading-[1.35] font-bold text-white">
            Bridging intelligent software systems with live stage technical execution.
          </h3>

          <p className="mb-7 text-[15px] leading-[1.7] text-[#f3f3f5]/62">
            Saya adalah mahasiswa S1 Teknik Informatika di Institut Teknologi PLN (ITPLN) yang tertarik pada perkembangan teknologi, khususnya kecerdasan buatan (AI), otomasi AI agents, dan rekayasa perangkat lunak. Selain di dunia komputasi, saya aktif sebagai FOH Engineer dan operator visual untuk berbagai acara berskala besar.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INTEREST_ITEMS.map((item) => {
              const Icon = INTEREST_ICONS[item.id] ?? Code2;
              const isSelected = item.id === selectedInterestId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedInterestId(item.id)}
                  aria-pressed={isSelected}
                  className={`flex items-center gap-2.5 rounded-lg border px-3.5 py-3 text-left text-[13px] font-medium text-[#f3f3f5] transition-all duration-200 ${
                    isSelected
                      ? 'border-[var(--accent)] bg-[#1e2024] shadow-[0_0_0_1px_var(--accent-glow)]'
                      : 'border-white/12 bg-[#17181a] hover:border-[var(--accent)] hover:bg-[#1e2024]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {activeInterest && (
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/8 bg-[#17181a] px-4 py-3 text-xs text-[#f3f3f5]/72">
              <span>{activeInterest.detail}</span>
              <a
                href={`#${activeInterest.relatedSection}`}
                className="font-mono-tech shrink-0 text-[11px] font-semibold text-[var(--accent)] no-underline hover:underline"
              >
                Jump to {activeInterest.relatedSection} →
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Education Timeline */}
        <div>
          <h3 className="font-mono-tech mb-[18px] text-xs tracking-[0.1em] text-[#f3f3f5]/62 uppercase">
            EDUCATION TIMELINE
          </h3>

          <div className="flex flex-col gap-5">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-[10px] border border-white/18 bg-[#1f2022] p-6 transition-all duration-250 hover:translate-x-1 hover:border-[#3b82f6]"
              >
                <div className="mb-1 text-base font-bold text-[#f3f3f5]">
                  {edu.institution}
                </div>
                <div className="mb-3 text-sm text-[#f3f3f5]/62">
                  {edu.program}
                </div>
                <div className="font-mono-tech flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#f3f3f5]/62">{edu.period}</span>
                  <span
                    className={`rounded px-2 py-0.5 text-[11px] ${
                      edu.badgeVariant === 'active'
                        ? 'border border-[#22c55e]/30 bg-[#22c55e]/15 text-[#22c55e]'
                        : 'border border-[#3b82f6]/30 bg-[#3b82f6]/15 text-[#93c5fd]'
                    }`}
                  >
                    {edu.badgeText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
