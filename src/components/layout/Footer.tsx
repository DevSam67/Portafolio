import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS, WHATSAPP_URLS, WHATSAPP_NUMBER } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-background">
      <div className="page-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Desarrollo de software y soluciones digitales.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm" aria-label="Pie de página">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 self-start rounded-md border border-white/12 px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
          >
            <MessageCircle className="size-4" />
            <span>{WHATSAPP_NUMBER}</span>
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.07] pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dev Sam. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
