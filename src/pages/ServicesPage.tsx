import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { whatsappForService } from "@/lib/site";

const SERVICES_IMAGE =
  "https://images.pexels.com/photos/18144271/pexels-photo-18144271.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1400";

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="page-container grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
                <span className="h-px w-10 bg-muted-foreground/60" />
                Servicios
              </p>
              <h1 className="text-6xl font-bold sm:text-7xl lg:text-8xl">Servicios</h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Soluciones digitales pensadas para las necesidades de cada proyecto.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={SERVICES_IMAGE}
                alt=""
                aria-hidden
                className="h-full w-full object-cover grayscale-[0.4] transition-transform duration-[2s] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-xs tracking-widest text-foreground/80">
                {services.length.toString().padStart(2, "0")} SERVICIOS
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.07] pb-24 sm:pb-32">
        <div className="page-container">
          {services.map((service, i) => {
            const isOffset = i % 2 === 1;
            return (
              <Reveal key={service.id}>
                <a
                  href={whatsappForService(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid gap-6 border-t border-white/[0.07] py-14 md:grid-cols-12 md:gap-8 md:py-20"
                >
                  <span
                    className={cn(
                      "font-display text-7xl font-bold text-white/[0.07] transition-colors duration-700 group-hover:text-white/[0.14] md:col-span-2 md:text-8xl"
                    )}
                  >
                    0{i + 1}
                  </span>

                  <div className={cn("md:col-span-5", isOffset && "md:col-start-5 md:col-span-6")}>
                    <h2 className="flex items-center gap-4 text-3xl font-bold sm:text-5xl">
                      {service.title}
                      <ArrowUpRight className="size-6 text-muted-foreground opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 sm:size-8" />
                    </h2>
                    <span className="mt-6 block h-px w-16 bg-white/20 transition-all duration-700 group-hover:w-full group-hover:bg-white/40" />
                  </div>

                  <p
                    className={cn(
                      "text-base leading-relaxed text-muted-foreground sm:text-lg md:col-span-4 md:pt-3",
                      isOffset ? "md:col-start-5 md:row-start-2 md:max-w-sm" : "md:col-start-9 md:max-w-sm"
                    )}
                  >
                    {service.description}
                  </p>
                </a>
              </Reveal>
            );
          })}
          <div className="border-t border-white/[0.07]" />
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-24 sm:py-32">
        <Reveal className="page-container">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-6xl">¿Qué necesitas construir?</h2>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                Cuéntame tu idea y conversemos sobre la mejor solución para tu proyecto.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton>Hablemos de tu proyecto</WhatsAppButton>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-sm">
                <Link to="/proyectos">
                  Ver proyectos
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
