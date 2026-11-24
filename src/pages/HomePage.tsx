import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import projects from "@/data/projects";
import { services } from "@/data/services";
import { WHATSAPP_URLS, whatsappForService } from "@/lib/site";

const HERO_IMAGE =
  "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1800";

const CODE_SNIPPET = [
  { text: "const ", color: "text-muted-foreground" },
  { text: "devSam", color: "text-foreground" },
  { text: " = ", color: "text-muted-foreground" },
  { text: "createSolution", color: "text-foreground/80" },
  { text: "({", color: "text-muted-foreground" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactTeaser />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden pt-28 pb-16 sm:pb-24">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-30 h-full w-full scale-105 object-cover opacity-45 animate-in fade-in duration-[2.4s] ease-out"
      />
      <div className="absolute inset-0 -z-20 bg-linear-to-t from-background via-background/75 to-background/35" />
      <div className="absolute inset-0 -z-20 bg-linear-to-r from-background via-background/60 to-transparent" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />

      <div className="page-container relative grid w-full items-end gap-16 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-150">
            <span className="h-px w-10 bg-muted-foreground/60" />
            Desarrollo de software
          </p>
          <h1 className="text-[2.75rem] leading-[1.02] font-bold sm:text-7xl lg:text-[6.5rem] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Soluciones digitales <span className="text-muted-foreground">para ideas reales.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            Desarrollo sitios web, sistemas y aplicaciones diseñadas para adaptarse a las necesidades de cada proyecto.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <WhatsAppButton>Hablemos de tu proyecto</WhatsAppButton>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-sm">
              <Link to="/proyectos">
                Ver proyectos
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden w-80 rounded-xl border border-white/[0.08] bg-card/70 p-6 font-mono text-[0.8rem] leading-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md lg:block animate-in fade-in slide-in-from-right-4 duration-1000 delay-1000">
          <div className="mb-5 flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <Code2 className="ml-auto size-4 text-muted-foreground" />
          </div>
          <p>
            {CODE_SNIPPET.map((part) => (
              <span key={part.text} className={part.color}>
                {part.text}
              </span>
            ))}
          </p>
          <p className="pl-4 text-muted-foreground">
            <span className="text-foreground/80">idea</span>: <span className="text-foreground">"real"</span>,
          </p>
          <p className="pl-4 text-muted-foreground">
            <span className="text-foreground/80">diseño</span>: <span className="text-foreground">"a medida"</span>,
          </p>
          <p className="text-muted-foreground">{"});"}</p>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="border-t border-white/[0.07] py-24 sm:py-32">
      <div className="page-container">
        <SectionHeader
          label="Servicios"
          title="Lo que puedo desarrollar para ti."
          action={
            <Button asChild variant="link" className="px-0 text-sm text-foreground">
              <Link to="/servicios">
                Ver todos los servicios
                <ArrowUpRight />
              </Link>
            </Button>
          }
        />

        <ul className="mt-16 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {services.map((service, i) => (
            <li key={service.id}>
              <Reveal delay={i * 80}>
                <a
                  href={whatsappForService(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-7 transition-colors duration-500 hover:text-foreground sm:py-9"
                >
                  <span className="flex items-baseline gap-5 sm:gap-10">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <span className="font-display text-2xl font-bold text-foreground/90 transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                      {service.title}
                    </span>
                  </span>
                  <ArrowUpRight className="size-6 shrink-0 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:size-7" />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  return (
    <section className="border-t border-white/[0.07] py-24 sm:py-32">
      <div className="page-container">
        <SectionHeader
          label="Proyectos"
          title="Proyectos seleccionados."
          action={
            <Button asChild variant="link" className="px-0 text-sm text-foreground">
              <Link to="/proyectos">
                Ver todos los proyectos
                <ArrowUpRight />
              </Link>
            </Button>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 120} className={i === 0 ? "md:col-span-2 lg:col-span-1" : undefined}>
              <Link
                to={`/proyectos#proyecto-${project.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-card transition-all duration-700 hover:border-white/20 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{project.type}</p>
                    <h3 className="mt-2 text-xl font-bold sm:text-2xl">{project.name}</h3>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactTeaser() {
  return (
    <section className="border-t border-white/[0.07] py-24 sm:py-32">
      <Reveal className="page-container">
        <div className="flex flex-col items-start gap-10 rounded-2xl border border-white/[0.08] bg-card p-8 sm:p-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">¿Tienes un proyecto en mente?</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-6xl">Hablemos.</h2>
          </div>
          <WhatsAppButton href={WHATSAPP_URLS.contact} variant="outline">
            Hablemos por WhatsApp
          </WhatsAppButton>
        </div>
      </Reveal>
    </section>
  );
}
