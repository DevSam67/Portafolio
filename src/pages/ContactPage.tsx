import { Reveal } from "@/components/common/Reveal";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { WHATSAPP_NUMBER, WHATSAPP_URLS } from "@/lib/site";

const CONTACT_IMAGE =
  "https://images.pexels.com/photos/39299831/pexels-photo-39299831.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1400";

export default function ContactPage() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-32 pb-20">
      <img
        src={CONTACT_IMAGE}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-background via-background/90 to-background/60" />

      <div className="page-container grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
              <span className="h-px w-10 bg-muted-foreground/60" />
              Contacto
            </p>
            <h1 className="text-5xl leading-[1.05] font-bold sm:text-7xl">¿Tienes un proyecto en mente?</h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Cuéntame qué necesitas y conversemos sobre una solución para tu proyecto.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <WhatsAppButton href={WHATSAPP_URLS.contact}>Hablemos por WhatsApp</WhatsAppButton>
              <p className="font-mono text-sm tracking-wider text-muted-foreground">{WHATSAPP_NUMBER}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-white/[0.08] bg-card/80 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <p className="font-display text-sm font-bold tracking-[0.2em] text-foreground">DEV SAM</p>
                  <p className="mt-1 text-xs text-muted-foreground">Desarrollo de software</p>
                </div>
                <span className="size-2 rounded-full bg-foreground/80" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-white/[0.08] px-5 py-4 text-sm leading-relaxed text-foreground">
                  Hola Dev Sam, quiero consultar sobre un proyecto.
                </div>
                <p className="text-xs text-muted-foreground">
                  Tu mensaje se abre listo para enviar por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
