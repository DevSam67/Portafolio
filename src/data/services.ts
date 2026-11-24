export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "diseno",
    title: "Diseño Web / Móvil",
    description:
      "Diseño de interfaces modernas y adaptables para sitios web y aplicaciones móviles.",
  },
  {
    id: "sitios",
    title: "Desarrollo de Sitios Web",
    description:
      "Desarrollo de sitios web modernos, responsivos y orientados a presentar negocios, servicios y marcas de manera profesional.",
  },
  {
    id: "sistemas",
    title: "Sistemas Web",
    description:
      "Desarrollo de sistemas web personalizados para gestionar información, procesos, clientes y operaciones.",
  },
  {
    id: "moviles",
    title: "Aplicaciones Móviles",
    description:
      "Desarrollo de aplicaciones móviles adaptadas a las necesidades de cada proyecto.",
  },
  {
    id: "electricas",
    title: "Soluciones Eléctricas",
    description:
      "Soluciones eléctricas adaptadas a las necesidades de cada proyecto, abarcando instalación, mantenimiento y diagnóstico.",
  },
];
