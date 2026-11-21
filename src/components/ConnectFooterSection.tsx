import { Check, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const EMAIL_ADDRESS = 'kevinbah08@gmail.com';

export function ConnectFooterSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
    } catch {
      const temp = document.createElement('textarea');
      temp.value = EMAIL_ADDRESS;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
      setCopied(true);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1240px] border-t border-white/18 px-[5vw] pt-[90px] pb-8"
    >
      <div className="relative mx-auto max-w-[820px] rounded-lg border-[1.5px] border-white/22 bg-[#1f2022] px-6 py-14 text-center shadow-[0_24px_60px_rgba(0,0,0,0.6)] sm:px-10">
        {/* 4 Corner Handles */}
        <div className="absolute -top-[5px] -left-[5px] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />
        <div className="absolute -top-[5px] -right-[5px] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />
        <div className="absolute -bottom-[5px] -left-[5px] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />
        <div className="absolute -right-[5px] -bottom-[5px] h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280]" />

        <span className="font-mono-tech mb-3 block text-[13px] tracking-[0.1em] text-[var(--accent)]">
          READY TO COLLABORATE?
        </span>
        <h2 className="font-display mx-auto mb-4 max-w-2xl text-[clamp(28px,4vw,44px)] leading-[1.2] font-bold text-white [text-wrap:balance]">
          Let&apos;s build intelligent software or run your next live production.
        </h2>
        <p className="mx-auto mb-9 max-w-[580px] text-[15px] text-[#f3f3f5]/62">
          Open for software engineering internships, AI automation projects, and FOH audio/visual crew roles.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="font-mono-tech inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-white/16 bg-[#17181a] px-5 py-3 text-xs text-[#f3f3f5] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[#23252a] hover:shadow-[0_0_14px_var(--accent-glow)]"
          >
            {copied ? (
              <Check className="h-[15px] w-[15px] text-[#22c55e]" />
            ) : (
              <Mail className="h-[15px] w-[15px]" />
            )}
            <span>{copied ? 'Email Copied!' : `${EMAIL_ADDRESS} (Copy)`}</span>
          </button>

          <a
            href="https://wa.me/6282118119009"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tech inline-flex items-center gap-2.5 rounded-md border border-white/16 bg-[#17181a] px-5 py-3 text-xs text-[#f3f3f5] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:bg-[#23252a] hover:shadow-[0_0_14px_var(--accent-glow)]"
          >
            <MessageCircle className="h-[15px] w-[15px] text-[#22c55e]" />
            <span>WhatsApp (+62 821-1811-9009)</span>
          </a>

          <a
            href="https://github.com/kevinvinvin14"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tech inline-flex items-center gap-2.5 rounded-md border border-white/16 bg-[#17181a] px-5 py-3 text-xs text-[#f3f3f5] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:bg-[#23252a] hover:shadow-[0_0_14px_var(--accent-glow)]"
          >
            <Github className="h-[15px] w-[15px]" />
            <span>GitHub (@kevinvinvin14)</span>
          </a>

          <a
            href="https://linkedin.com/in/kevin-bahlawan-rajendra-8b4675377"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tech inline-flex items-center gap-2.5 rounded-md border border-white/16 bg-[#17181a] px-5 py-3 text-xs text-[#f3f3f5] no-underline transition-all duration-200 hover:border-[var(--accent)] hover:bg-[#23252a] hover:shadow-[0_0_14px_var(--accent-glow)]"
          >
            <Linkedin className="h-[15px] w-[15px] text-[#60a5fa]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <footer className="font-mono-tech mt-16 flex flex-wrap justify-between gap-4 border-t border-white/8 pt-8 text-xs text-[#f3f3f5]/62">
        <div>© 2026 Kevin Bahlawan Rajendra · Jakarta, Indonesia</div>
        <div>Built with React &amp; TypeScript · AI Canvas Edition</div>
      </footer>

      {/* Copy Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`font-mono-tech fixed bottom-7 left-1/2 z-[1000] -translate-x-1/2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#161617] shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-transform duration-300 ${
          copied ? 'translate-y-0' : 'translate-y-24'
        }`}
      >
        Email copied to clipboard!
      </div>
    </section>
  );
}
