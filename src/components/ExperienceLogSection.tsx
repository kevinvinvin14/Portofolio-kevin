import { ChevronRight, Radio, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { EXPERIENCE_CUES, type ExperienceCue } from '../data/portfolioData';

export function ExperienceLogSection() {
  const [activeCue, setActiveCue] = useState<ExperienceCue | null>(null);

  useEffect(() => {
    if (!activeCue) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCue(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCue]);

  return (
    <section id="experience" className="mx-auto max-w-[1240px] px-[5vw] py-[110px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-white/18 pb-4">
        <div>
          <span className="font-mono-tech mb-1.5 block text-xs tracking-[0.08em] text-[var(--accent)]">
            03 / TRACK RECORD
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] font-bold text-[#f3f3f5]">
            EXPERIENCE LOG
          </h2>
        </div>
        <div className="font-mono-tech text-xs text-[#f3f3f5]/62">
          Live Events &amp; Technical Production
        </div>
      </div>

      <div className="flex flex-col gap-[18px]">
        {EXPERIENCE_CUES.map((cue) => (
          <button
            key={cue.id}
            type="button"
            onClick={() => setActiveCue(cue)}
            className="group grid w-full grid-cols-1 items-center gap-4 rounded-[10px] border border-white/18 bg-[#1f2022] px-6 py-6 text-left transition-all duration-300 hover:translate-x-1.5 hover:border-[var(--accent)] hover:shadow-[-4px_0_20px_var(--accent-glow)] md:grid-cols-[200px_1fr_140px] md:gap-7 md:px-8"
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono-tech text-[13px] text-[#f3f3f5]/62">
                {cue.period}
              </span>
              <span className="font-mono-tech self-start rounded-full border border-white/15 bg-white/7 px-2.5 py-1 text-[11px] text-[#f3f3f5] whitespace-nowrap">
                {cue.rolePill}
              </span>
            </div>

            <div>
              <h3 className="font-display mb-1.5 text-[22px] font-bold text-white">
                {cue.title}
              </h3>
              <p className="text-sm text-[#f3f3f5]/62">{cue.description}</p>
            </div>

            <div className="flex items-center justify-start gap-2 md:justify-end">
              <span className="font-mono-tech inline-flex items-center gap-1.5 rounded border border-white/15 bg-[#17181a] px-3 py-1.5 text-xs text-[#f3f3f5]/62 transition-all duration-200 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-glow)] group-hover:text-[var(--accent)] whitespace-nowrap">
                <span>{cue.cueCode}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Cue Sheet Inspector Modal */}
      {activeCue && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cue-modal-title"
          onClick={() => setActiveCue(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-xl border border-white/22 bg-[#1f2022] p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="font-mono-tech mb-1 flex items-center gap-2 text-xs text-[var(--accent)]">
                  <Radio className="h-3.5 w-3.5" />
                  <span>{activeCue.cueCode}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCue.period}</span>
                </div>
                <h3 id="cue-modal-title" className="font-display text-2xl font-bold text-white">
                  {activeCue.title}
                </h3>
                <p className="font-mono-tech mt-1 text-xs text-[#f3f3f5]/62">
                  {activeCue.rolePill} · {activeCue.venue}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCue(null)}
                aria-label="Close cue sheet inspector"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/15 bg-[#17181a] text-[#f3f3f5]/75 transition-colors hover:border-white/40 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-5">
              <h4 className="font-mono-tech mb-2.5 text-[11px] tracking-wider text-[#f3f3f5]/62 uppercase">
                Operational Responsibilities
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-[#f3f3f5]/82">
                {activeCue.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-mono-tech mt-0.5 text-xs text-[var(--accent)]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#17181a] p-4">
              <div className="font-mono-tech mb-2 text-[11px] tracking-wider text-[#f3f3f5]/62 uppercase">
                Signal &amp; Show Flow
              </div>
              <div className="font-mono-tech flex flex-wrap items-center gap-2 text-xs text-[#f3f3f5]">
                {activeCue.signalChain.map((node, index) => (
                  <span key={node} className="inline-flex items-center gap-2">
                    <span className="rounded border border-white/12 bg-[#1f2022] px-2.5 py-1">
                      {node}
                    </span>
                    {index < activeCue.signalChain.length - 1 && (
                      <span className="text-[var(--accent)]" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
