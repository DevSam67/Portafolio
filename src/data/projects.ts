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
      `${import.meta.env.BASE_URL}images/gimnasio1.png`,
  `${import.meta.env.BASE_URL}images/gimnasio2.png`,
  `${import.meta.env.BASE_URL}images/gimnasio3.png`,
  `${import.meta.env.BASE_URL}images/gimnasio4.png`,
  `${import.meta.env.BASE_URL}images/gimnasio5.png`,
  `${import.meta.env.BASE_URL}images/gimnasio6.png`,
  `${import.meta.env.BASE_URL}images/gimnasio7.png`,
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
      `${import.meta.env.BASE_URL}images/tradeflow1.png`,
  `${import.meta.env.BASE_URL}images/tradeflow2.png`,
  `${import.meta.env.BASE_URL}images/tradeflow3.png`,
  `${import.meta.env.BASE_URL}images/tradeflow4.png`,
  `${import.meta.env.BASE_URL}images/tradeflow5.png`,
  `${import.meta.env.BASE_URL}images/tradeflow6.png`,
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
      `${import.meta.env.BASE_URL}images/globaltrade1.png`,
  `${import.meta.env.BASE_URL}images/globaltrade2.png`,
  `${import.meta.env.BASE_URL}images/globaltrade3.png`,
  `${import.meta.env.BASE_URL}images/globaltrade4.png`,
  `${import.meta.env.BASE_URL}images/globaltrade5.png`,
  `${import.meta.env.BASE_URL}images/globaltrade6.png`,
    ],
  },
];

export default projects;
