export interface Project {
  id: number;
  name: string;
  type: string;
  platforms: string[];
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Sistema de Gestión para Gimnasio",
    type: "Sistema de gestión",
    platforms: ["Web", "Móvil"],
    description:
      "Sistema desarrollado para facilitar la gestión de clientes, mensualidades, asistencias, pagos y ventas de un gimnasio.",
    images: [
      "/images/gimnasio1.png",
      "/images/gimnasio2.png",
      "/images/gimnasio3.png",
      "/images/gimnasio4.png",
      "/images/gimnasio5.png",
      "/images/gimnasio6.png",
      "/images/gimnasio7.png",
    ],
  },
  {
    id: 2,
    name: "Sistema de Gestión de Comercio Exterior",
    type: "Sistema de gestión",
    platforms: ["Web"],
    description:
      "Sistema web multiempresarial desarrollado para organizar y gestionar procesos y operaciones relacionados con el comercio exterior.",
    images: [
      "/images/tradeflow1.png",
      "/images/tradeflow2.png",
      "/images/tradeflow3.png",
      "/images/tradeflow4.png",
      "/images/tradeflow5.png",
      "/images/tradeflow6.png",
    ],
  },
  {
    id: 3,
    name: "Sitio Web Corporativo",
    type: "Sitio web",
    platforms: ["Web", "Móvil"],
    description:
      "Sitio web corporativo desarrollado para presentar una empresa, comunicar sus servicios y facilitar el contacto con potenciales clientes.",
    images: [
      "/images/globaltrade1.png",
      "/images/globaltrade2.png",
      "/images/globaltrade3.png",
      "/images/globaltrade4.png",
      "/images/globaltrade5.png",
      "/images/globaltrade6.png",
    ],
  },
];

export default projects;
