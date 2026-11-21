import { Clock, LayoutGrid, Wrench } from 'lucide-react';
import { useState } from 'react';
import { CORE_TOOLKIT, HARD_SKILLS, SOFT_SKILLS } from '../data/portfolioData';

export function TechnicalArsenalSection() {
  const [selectedHardSkill, setSelectedHardSkill] = useState<string>('Python');
  const [selectedSoftSkill, setSelectedSoftSkill] = useState<string>('Analytical Thinking');

  return (
    <section id="skills" className="mx-auto max-w-[1240px] px-[5vw] py-[110px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-white/18 pb-4">
        <div>
          <span className="font-mono-tech mb-1.5 block text-xs tracking-[0.08em] text-[var(--accent)]">
            02 / CAPABILITIES
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] font-bold text-[#f3f3f5]">
            TECHNICAL ARSENAL
          </h2>
        </div>
        <div className="font-mono-tech text-xs text-[#f3f3f5]/62">
          Software · Production · Soft Skills
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Card 1: Hard Skills */}
        <div className="flex flex-col justify-between rounded-xl border border-white/18 bg-[#1f2022] p-7 transition-colors duration-200 hover:border-white/35">
          <div>
            <div className="mb-6 flex items-center gap-3 border-b border-white/8 pb-3.5">
              <Wrench className="h-5 w-5 text-[var(--accent)]" />
              <h3 className="text-lg font-bold text-[#f3f3f5]">Hard Skills</h3>
            </div>

            <div className="flex flex-col gap-3">
              {HARD_SKILLS.map((skill) => {
                const isSelected = selectedHardSkill === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedHardSkill(skill.name)}
                    aria-pressed={isSelected}
                    className={`group w-full rounded-lg border px-3.5 py-3 text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-[var(--accent)] bg-[#1a1c20]'
                        : 'border-white/8 bg-[#17181a] hover:border-[var(--accent)] hover:bg-[#1a1c20]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#f3f3f5]">
                      <span
                        className={`font-mono-tech text-[var(--accent)] transition-opacity ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        [ ]
                      </span>
                      <span>{skill.name}</span>
                    </div>
                    <div className="mt-1 text-xs text-[#f3f3f5]/62">{skill.detail}</div>
                    {isSelected && (
                      <div className="font-mono-tech mt-2 flex flex-wrap gap-1.5 text-[11px] text-[#93c5fd]">
                        {skill.tags.map((tag, idx) => (
                          <span key={tag}>
                            {tag}
                            {idx < skill.tags.length - 1 ? ' · ' : ''}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 2: Core Toolkit */}
        <div className="flex flex-col justify-between rounded-xl border border-white/18 bg-[#1f2022] p-7 transition-colors duration-200 hover:border-white/35">
          <div>
            <div className="mb-6 flex items-center gap-3 border-b border-white/8 pb-3.5">
              <LayoutGrid className="h-5 w-5 text-[#38bdf8]" />
              <h3 className="text-lg font-bold text-[#f3f3f5]">Core Toolkit</h3>
            </div>

            <div className="flex flex-col gap-3">
              {CORE_TOOLKIT.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between rounded-lg border border-white/8 bg-[#17181a] px-4 py-3"
                >
                  <div>
                    <strong className="text-sm font-semibold text-[#f3f3f5]">
                      {tool.name}
                    </strong>
                    <div className="font-mono-tech mt-0.5 text-xs text-[#f3f3f5]/62">
                      {tool.subtitle}
                    </div>
                  </div>
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-[3px]"
                    style={{ backgroundColor: tool.dotColor }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Operational Mindset */}
        <div className="flex flex-col justify-between rounded-xl border border-white/18 bg-[#1f2022] p-7 transition-colors duration-200 hover:border-white/35">
          <div>
            <div className="mb-6 flex items-center gap-3 border-b border-white/8 pb-3.5">
              <Clock className="h-5 w-5 text-[#22c55e]" />
              <h3 className="text-lg font-bold text-[#f3f3f5]">Operational Mindset</h3>
            </div>

            <div className="flex flex-col gap-3">
              {SOFT_SKILLS.map((node) => {
                const isSelected = selectedSoftSkill === node.title;
                return (
                  <button
                    key={node.title}
                    type="button"
                    onClick={() => setSelectedSoftSkill(node.title)}
                    aria-pressed={isSelected}
                    className={`w-full rounded-lg border px-3.5 py-3 text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-[#22c55e] bg-[#1a1d1b]'
                        : 'border-white/8 bg-[#17181a] hover:border-[#22c55e]'
                    }`}
                  >
                    <div className="mb-0.5 text-[13px] font-semibold text-[#f3f3f5]">
                      {node.title}
                    </div>
                    <div className="text-xs text-[#f3f3f5]/62">{node.description}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
