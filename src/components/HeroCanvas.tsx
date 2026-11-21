import { Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { HERO_ROLES, type HeroRole } from '../data/portfolioData';

interface HeroCanvasProps {
  activeRole: HeroRole;
  roleIndex: number;
  onSelectRole: (index: number) => void;
}

export function HeroCanvas({ activeRole, roleIndex, onSelectRole }: HeroCanvasProps) {
  const [bulbOff, setBulbOff] = useState(false);
  const [displayedPrompt, setDisplayedPrompt] = useState(activeRole.prompt);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [shimmerKey, setShimmerKey] = useState(0);
  const typingIntervalRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', activeRole.accent);
    document.documentElement.style.setProperty('--accent-glow', `${activeRole.accent}40`);
  }, [activeRole]);

  const runTypewriter = (targetText: string) => {
    if (typingIntervalRef.current) {
      window.clearInterval(typingIntervalRef.current);
    }
    let idx = 0;
    setDisplayedPrompt('');
    typingIntervalRef.current = window.setInterval(() => {
      idx += 1;
      setDisplayedPrompt(targetText.slice(0, idx));
      if (idx >= targetText.length && typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    }, 15);
  };

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  const triggerRoleSwitch = (nextIndex: number) => {
    setIsEditingPrompt(false);
    setCustomPrompt('');
    onSelectRole(nextIndex);
    runTypewriter(HERO_ROLES[nextIndex].prompt);
    setShimmerKey((prev) => prev + 1);
  };

  const handleGenerate = () => {
    if (isEditingPrompt && customPrompt.trim().length > 0) {
      const q = customPrompt.toLowerCase();
      const matchedIdx = HERO_ROLES.findIndex((role) =>
        role.keywords.some((kw) => q.includes(kw)),
      );
      const targetIdx =
        matchedIdx !== -1 ? matchedIdx : (roleIndex + 1) % HERO_ROLES.length;
      setIsEditingPrompt(false);
      setCustomPrompt('');
      onSelectRole(targetIdx);
      setDisplayedPrompt(customPrompt.trim());
      setShimmerKey((prev) => prev + 1);
      return;
    }

    const nextIdx = (roleIndex + 1) % HERO_ROLES.length;
    triggerRoleSwitch(nextIdx);
  };

  const handleCyclePreset = () => {
    const nextIdx = (roleIndex + 1) % HERO_ROLES.length;
    triggerRoleSwitch(nextIdx);
  };

  const handleReset = () => {
    triggerRoleSwitch(0);
  };

  const handleEnableEdit = () => {
    setIsEditingPrompt(true);
    setCustomPrompt(displayedPrompt);
    window.setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 10);
  };

  return (
    <main
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-[5vw] pt-24 pb-14"
    >
      {/* Parametric Wireframe Funnel Decoration */}
      <svg
        className="animate-funnel pointer-events-none absolute top-[10vh] left-[4vw] h-[240px] w-[240px] opacity-45"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <g stroke="rgba(255,255,255,0.09)" fill="none" strokeWidth="0.75">
          <ellipse cx="100" cy="100" rx="90" ry="25" />
          <ellipse cx="100" cy="95" rx="84" ry="23" />
          <ellipse cx="100" cy="90" rx="78" ry="21" />
          <ellipse cx="100" cy="85" rx="72" ry="19" />
          <ellipse cx="100" cy="80" rx="66" ry="17" />
          <ellipse cx="100" cy="75" rx="60" ry="15" />
          <ellipse cx="100" cy="70" rx="54" ry="13" />
          <ellipse cx="100" cy="65" rx="48" ry="11" />
          <ellipse cx="100" cy="60" rx="42" ry="9" />
          <ellipse cx="100" cy="55" rx="36" ry="7" />
          <ellipse cx="100" cy="50" rx="30" ry="5" />
          <ellipse cx="100" cy="45" rx="24" ry="4" />
          <ellipse cx="100" cy="40" rx="18" ry="3" />
          <ellipse cx="100" cy="35" rx="12" ry="2" />
          <ellipse cx="100" cy="30" rx="6" ry="1" />
        </g>
      </svg>

      {/* Top Identity Badge */}
      <div className="z-[2] mb-7 flex items-center gap-4">
        <div className="hidden h-px w-[clamp(48px,9vw,130px)] bg-white/16 sm:block" />
        <div className="flex items-center gap-3 rounded-full border border-white/12 bg-[#1f2022]/75 px-4 py-2 backdrop-blur-md">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#ef4444] to-[#f97316] shadow-[0_0_14px_rgba(239,68,68,0.4)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-sm leading-tight font-bold text-[#f3f3f5]">
              Kevin Bahlawan Rajendra
            </div>
            <div className="font-mono-tech text-[11px] text-[#f3f3f5]/62">
              Informatics · AI Automation · FOH Audio &amp; Visual
            </div>
          </div>
        </div>
        <div className="hidden h-px w-[clamp(48px,9vw,130px)] bg-white/16 sm:block" />
      </div>

      {/* Interactive AI Prompt Toolbar */}
      <div className="relative z-20 -mb-[18px] flex w-full max-w-[680px] flex-col items-stretch gap-1.5 rounded-lg border border-white/14 bg-[#222326] p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.55)] md:w-auto md:max-w-none md:flex-row md:items-center">
        <div
          onClick={!isEditingPrompt ? handleEnableEdit : undefined}
          style={{ borderColor: activeRole.accent }}
          className="font-mono-tech flex min-w-0 flex-1 cursor-text items-center justify-between rounded-[5px] border-[1.5px] bg-[#18191b] px-3.5 py-2 text-[13px] text-[#f3f3f5] transition-colors duration-300 md:min-w-[clamp(280px,36vw,460px)]"
        >
          {isEditingPrompt ? (
            <input
              ref={inputRef}
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleGenerate();
                } else if (e.key === 'Escape') {
                  setIsEditingPrompt(false);
                }
              }}
              onBlur={() => setIsEditingPrompt(false)}
              placeholder="Type focus: ai, audio, or visual..."
              aria-label="Prompt focus filter"
              className="w-full bg-transparent text-[13px] text-[#f3f3f5] outline-none placeholder:text-[#f3f3f5]/40"
            />
          ) : (
            <>
              <span className="truncate">{displayedPrompt}</span>
              <span
                className="animate-blink-cursor ml-1 font-bold"
                style={{ color: activeRole.accent }}
              >
                |
              </span>
            </>
          )}
        </div>

        <div className="flex items-center justify-end gap-1.5">
          <button
            type="button"
            onClick={handleCyclePreset}
            title="Cycle preset focus"
            aria-label="Cycle preset prompt"
            className="font-mono-tech flex items-center gap-1.5 rounded-[5px] border border-transparent px-3 py-2 text-xs text-[#f3f3f5]/62 transition-colors hover:bg-[#2a2b2f] hover:text-[#f3f3f5] whitespace-nowrap shrink-0"
          >
            •••
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="font-mono-tech flex items-center gap-1.5 rounded-[5px] border border-transparent px-3 py-2 text-xs text-[#f3f3f5]/62 transition-colors hover:bg-[#2a2b2f] hover:text-[#f3f3f5] whitespace-nowrap shrink-0"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleGenerate}
            className="font-mono-tech flex items-center gap-1.5 rounded-[5px] border border-white/16 bg-[#2e3035] px-3.5 py-2 text-xs font-semibold text-[#f3f3f5] transition-all duration-200 hover:border-[#f3f3f5] hover:bg-[#f3f3f5] hover:text-[#161617] hover:shadow-[0_0_16px_var(--accent-glow)] whitespace-nowrap shrink-0"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Generate ✦</span>
          </button>
        </div>
      </div>

      {/* Vector Selection Bounding Box */}
      <div className="relative flex w-full max-w-[940px] flex-col items-center rounded border-[1.5px] border-white/28 bg-[#161617]/45 px-4 pt-12 pb-8 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xs sm:px-10 sm:pt-14 sm:pb-10">
        {/* 4 Corner Resize Handles */}
        <div className="absolute -top-[5px] -left-[5px] z-[5] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />
        <div className="absolute -top-[5px] -right-[5px] z-[5] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />
        <div className="absolute -bottom-[5px] -left-[5px] z-[5] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />
        <div className="absolute -right-[5px] -bottom-[5px] z-[5] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />

        {/* Sweep Shimmer Overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {shimmerKey > 0 && (
            <div
              key={shimmerKey}
              className="animate-sweep absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent"
            />
          )}
        </div>

        {/* Animated Pointer Cursor */}
        <svg
          className="animate-cursor-float pointer-events-none absolute -right-5 -bottom-5 z-15 h-7 w-7 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          stroke="#161617"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M4 3L11 20L14 13L21 10L4 3Z" />
        </svg>

        {/* Giant Wordmark with Interactive Lightbulb */}
        <div className="font-display relative my-3 flex select-none items-center justify-center text-[clamp(48px,12.8vw,156px)] leading-[0.95] font-bold tracking-[-0.04em] text-[#e2e2e6]">
          <span className="relative z-[2]">Portf</span>

          <button
            type="button"
            onClick={() => setBulbOff((prev) => !prev)}
            title={bulbOff ? 'Turn illumination on' : 'Turn illumination off'}
            aria-pressed={!bulbOff}
            aria-label="Toggle hero lightbulb illumination"
            className="group relative mx-1 inline-flex h-[clamp(64px,13vw,160px)] w-[clamp(48px,10vw,120px)] cursor-pointer items-center justify-center bg-transparent transition-transform duration-250 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]"
          >
            <span
              className={`pointer-events-none absolute z-[1] h-[220%] w-[220%] rounded-full transition-all duration-400 ${
                bulbOff ? 'scale-60 opacity-0' : 'scale-100 opacity-100'
              }`}
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.45) 0%, var(--accent-glow) 38%, transparent 70%)',
              }}
            />
            <svg
              className={`relative z-[3] h-full w-full transition-all duration-300 ${
                bulbOff
                  ? 'drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]'
                  : 'drop-shadow-[0_0_20px_rgba(255,255,255,0.75)]'
              }`}
              viewBox="0 0 100 130"
              aria-hidden="true"
            >
              <path
                d="M 50 15 C 30 15, 18 32, 18 52 C 18 66, 26 78, 32 87 L 34 94 L 66 94 L 68 87 C 74 78, 82 66, 82 52 C 82 32, 70 15, 50 15 Z"
                fill={bulbOff ? '#52525b' : '#FFFFFF'}
              />
              <path
                d="M 40 55 L 47 38 L 53 38 L 60 55"
                fill="none"
                stroke={bulbOff ? '#27272a' : '#E2E8F0'}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <rect x="34" y="94" width="32" height="6" rx="2" fill="#2E3035" />
              <rect x="36" y="102" width="28" height="5" rx="2" fill="#222326" />
              <rect x="38" y="109" width="24" height="5" rx="2" fill="#18191B" />
              <path d="M 42 116 C 42 120, 58 120, 58 116 Z" fill="#0F1011" />
            </svg>
          </button>

          <span className="relative z-[2]">lio</span>
        </div>

        {/* Frame Sub-caption */}
        <div className="flex w-full flex-col items-center gap-4 border-t border-white/12 pt-5 text-center">
          <div className="font-mono-tech flex flex-wrap items-center justify-center gap-2.5 text-[13px] text-[#f3f3f5]">
            <button
              type="button"
              onClick={handleCyclePreset}
              className="font-bold transition-colors hover:underline"
              style={{ color: activeRole.accent }}
              title="Click to cycle discipline role"
            >
              {activeRole.roleIndex}
            </button>
            <span aria-hidden="true">—</span>
            <span className="font-sans font-semibold">{activeRole.roleTitle}</span>
          </div>

          <p className="max-w-[660px] text-sm text-[#f3f3f5]/62">
            {activeRole.summary}
          </p>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="font-mono-tech rounded-full border border-white/14 bg-white/5 px-3.5 py-1.5 text-[11px] text-[#f3f3f5] no-underline transition-all duration-200 hover:border-[#f3f3f5] hover:bg-[#f3f3f5] hover:text-[#161617] whitespace-nowrap"
            >
              View Projects ↓
            </a>
            <a
              href="#experience"
              className="font-mono-tech rounded-full border border-white/14 bg-white/5 px-3.5 py-1.5 text-[11px] text-[#f3f3f5] no-underline transition-all duration-200 hover:border-[#f3f3f5] hover:bg-[#f3f3f5] hover:text-[#161617] whitespace-nowrap"
            >
              Stage Logs ⚡
            </a>
            <a
              href="#contact"
              className="font-mono-tech rounded-full border border-white/14 bg-white/5 px-3.5 py-1.5 text-[11px] text-[#f3f3f5] no-underline transition-all duration-200 hover:border-[#f3f3f5] hover:bg-[#f3f3f5] hover:text-[#161617] whitespace-nowrap"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
