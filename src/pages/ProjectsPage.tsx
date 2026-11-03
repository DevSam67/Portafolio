import { Reveal } from "@/components/common/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import projects from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="page-container">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
              <span className="h-px w-10 bg-muted-foreground/60" />
              Proyectos
            </p>
            <h1 className="text-6xl font-bold sm:text-7xl lg:text-8xl">Proyectos</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Una selección de soluciones digitales desarrolladas para diferentes necesidades.
            </p>
          </Reveal>

          <nav className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.07] sm:grid-cols-3" aria-label="Índice de proyectos">
            {projects.map((project, i) => (
              <a
                key={project.id}
                href={`#proyecto-${project.id}`}
                className="group flex items-center justify-between gap-4 bg-background px-6 py-5 transition-colors duration-300 hover:bg-card"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                    {project.name}
                  </span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {projects.map((project, i) => {
        const isReversed = i % 2 === 1;
        return (
          <section
            key={project.id}
            id={`proyecto-${project.id}`}
            className="scroll-mt-24 border-t border-white/[0.07] py-20 sm:py-28"
          >
            <div className="page-container">
              <Reveal className="mb-12 sm:mb-16">
                <span className="font-display text-7xl font-bold text-white/[0.07] sm:text-9xl">
                  0{project.id}
                </span>
              </Reveal>

              <Reveal>
                <ProjectGallery images={project.images} title={project.name} />
              </Reveal>

              <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={cn("lg:col-span-5", isReversed && "lg:order-2 lg:col-start-8")}
                >
                  <h2 className="text-3xl font-bold sm:text-5xl">{project.name}</h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-white/12 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={150} className={cn("lg:col-span-6", isReversed ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:col-start-7")}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{project.description}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/[0.07] pt-6 text-sm">
                    <div>
                      <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Tipo</dt>
                      <dd className="mt-2 text-foreground">{project.type}</dd>
                    </div>
                    <div>
                      <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Plataformas</dt>
                      <dd className="mt-2 text-foreground">{project.platforms.join(" · ")}</dd>
                    </div>
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
