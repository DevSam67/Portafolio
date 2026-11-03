export const WHATSAPP_NUMBER = "+591 70364875";

export const WHATSAPP_URLS = {
  general: "https://wa.me/59170364875?text=Hola%20Dev%20Sam,%20estoy%20interesado%20en%20un%20proyecto",
  contact: "https://wa.me/59170364875?text=Hola%20Dev%20Sam,%20quiero%20consultar%20sobre%20un%20proyecto",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Contacto", to: "/contacto" },
] as const;
