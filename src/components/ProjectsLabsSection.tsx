import { AudioLines, Layers, Terminal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PROJECTS_LIST, type ProjectItem } from '../data/portfolioData';

type ProjectFilter = 'all' | 'ai' | 'av';

const FILTER_TABS: { key: ProjectFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'Software & AI' },
  { key: 'av', label: 'Audio & Visual' },
];

function ProjectIcon({ type }: { type: ProjectItem['iconType'] }) {
  if (type === 'layers') {
    return <Layers className="h-12 w-12 text-white/40" strokeWidth={1.5} />;
  }
  if (type === 'terminal') {
    return <Terminal className="h-12 w-12 text-white/40" strokeWidth={1.5} />;
  }
  return <AudioLines className="h-12 w-12 text-white/40" strokeWidth={1.5} />;
}

export function ProjectsLabsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'all'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((item) => item.category === filter);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="mx-auto max-w-[1240px] px-[5vw] py-[110px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-white/18 pb-4">
        <div>
          <span className="font-mono-tech mb-1.5 block text-xs tracking-[0.08em] text-[var(--accent)]">
            04 / SELECTED WORKS
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] font-bold text-[#f3f3f5]">
            PROJECTS &amp; LABS
          </h2>
        </div>
        <div className="font-mono-tech text-xs text-[#f3f3f5]/62">
          Code · AI Automation · Visual Systems
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects">
        {FILTER_TABS.map((tab) => {
          const isActive = filter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(tab.key)}
              className={`font-mono-tech rounded-md border px-4 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'border-[#f3f3f5] bg-[#f3f3f5] font-bold text-[#161617]'
                  : 'border-white/18 bg-[#1f2022] text-[#f3f3f5]/62 hover:border-[#f3f3f5] hover:bg-[#f3f3f5] hover:font-bold hover:text-[#161617]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border-[1.5px] border-white/18 bg-[#1f2022] transition-all duration-300 hover:-translate-y-1 hover:border-[#f3f3f5] hover:shadow-[0_16px_36px_rgba(0,0,0,0.6)]"
          >
            {/* 4 Corner Handles */}
            <div className="absolute top-0 left-0 z-10 h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280] opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="absolute top-0 right-0 z-10 h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280] opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 z-10 h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280] opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="absolute right-0 bottom-0 z-10 h-2.5 w-2.5 border border-[#9ca3af] bg-[#6b7280] opacity-80 transition-opacity group-hover:opacity-100" />

            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden border-b border-white/10 bg-[#161719] text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#3b82f6]"
              aria-label={`Inspect ${project.title} details`}
            >
              <div className="procedural-grid absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-105" />
              <div className="relative z-[2] transition-transform duration-300 group-hover:scale-110">
                <ProjectIcon type={project.iconType} />
              </div>
              <span className="font-mono-tech absolute top-3.5 left-3.5 rounded border border-white/18 bg-[#161617]/85 px-2.5 py-1 text-[11px] text-[#f3f3f5]">
                {project.badgeOverlay}
              </span>
            </button>

            <div className="flex flex-grow flex-col justify-between p-[26px]">
              <div>
                <h3 className="font-display mb-2 text-[22px] font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#f3f3f5]/62">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-tech rounded border border-white/10 bg-[#17181a] px-2 py-1 text-[11px] text-[#d4d4d8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <a
                  href={project.actionHref}
                  target={project.isExternal ? '_blank' : undefined}
                  rel={project.isExternal ? 'noopener noreferrer' : undefined}
                  className="font-mono-tech inline-flex items-center gap-1.5 text-xs font-semibold text-[#f3f3f5] no-underline transition-colors hover:text-[var(--accent)]"
                >
                  {project.actionLabel}
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-mono-tech text-[11px] text-[#f3f3f5]/55 transition-colors hover:text-[#f3f3f5]"
                >
                  View Specs
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-xl border border-white/22 bg-[#1f2022] p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="font-mono-tech mb-1 text-xs text-[var(--accent)]">
                  {selectedProject.badgeOverlay} · {selectedProject.statusLabel}
                </div>
                <h3 id="project-modal-title" className="font-display text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project specifications"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/15 bg-[#17181a] text-[#f3f3f5]/75 transition-colors hover:border-white/40 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-[#f3f3f5]/75">
              {selectedProject.description}
            </p>

            <div className="mb-6 rounded-lg border border-white/10 bg-[#17181a] p-4">
              <div className="font-mono-tech mb-2.5 text-[11px] tracking-wider text-[#f3f3f5]/62 uppercase">
                System &amp; Architecture Notes
              </div>
              <ul className="flex flex-col gap-2 text-sm text-[#f3f3f5]/82">
                {selectedProject.architectureNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5">
                    <span className="font-mono-tech mt-0.5 text-xs text-[var(--accent)]">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-tech rounded border border-white/10 bg-[#17181a] px-2.5 py-1 text-[11px] text-[#d4d4d8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.actionHref}
                target={selectedProject.isExternal ? '_blank' : undefined}
                rel={selectedProject.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  if (!selectedProject.isExternal) setSelectedProject(null);
                }}
                className="font-mono-tech inline-flex items-center gap-1.5 rounded-md bg-[#f3f3f5] px-4 py-2 text-xs font-bold text-[#161617] no-underline transition-colors hover:bg-white"
              >
                {selectedProject.actionLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
