import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { useScrolled } from "@/hooks/useScroll";
import { NAV_LINKS, WHATSAPP_URLS } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-foreground after:transition-opacity after:duration-300",
    isActive
      ? "text-foreground after:opacity-100"
      : "text-muted-foreground after:opacity-0 hover:text-foreground"
  );

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-white/[0.07] bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="page-container flex h-18 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="outline" size="sm" className="h-9 px-4">
              <a href={WHATSAPP_URLS.general} target="_blank" rel="noopener noreferrer">
                Hablemos
              </a>
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-white/5 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background/97 px-5 pt-28 pb-10 transition-[opacity,transform] duration-500 ease-out md:hidden",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col divide-y divide-white/[0.07]" aria-label="Móvil">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-baseline justify-between py-6 font-display text-4xl font-bold transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )
              }
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
              <span className="font-sans text-xs tracking-widest text-muted-foreground">
                0{i + 1}
              </span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto">
          <Button asChild size="lg" className="h-12 w-full text-sm">
            <a href={WHATSAPP_URLS.general} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Hablemos de tu proyecto
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
