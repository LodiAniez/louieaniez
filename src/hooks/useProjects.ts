"use client";

import { basePath } from "./../../next.config";

enum Technologies {
  NODEJS = "NodeJS",
  TS = "Typescript",
  JS = "Javascript",
  TAILWIND = "Tailwind CSS",
  MUI = "Material UI",
  MYSQL = "MySQL",
  NOSQL = "NoSQL",
  DOCKER = "Docker",
  GIT = "Git",
  POSTGRE = "PostgreSQL",
  FIREBASE = "Firebase",
  MONGO = "MongoDB",
  PRISMA = "Prisma",
  NEXT = "Next JS",
  NEST = "Nest JS",
  RTK = "Redux Toolkit Query",
  LINUX = "Linux",
  SOCKETIO = "Socket.IO",
  LARAVEL = "Laravel",
  ANGULAR = "Angular",
  NGRX = "NgRx",
  REACT = "React JS",
  RN = "React Native",
  EXPRESS = "ExpressJS",
  PWA = "Progressive Web App",
}

enum ProjectTag {
  WEB = "Web application",
  MOBILE = "Mobile application",
}

type Techs = Record<Technologies, { color: string; tech: Technologies }>;
type Project = {
  title: string;
  tags: ProjectTag[];
  images: string[];
  description: string;
  technologies: { color: string; tech: Technologies }[];
  link?: string;
};

export const useProjects = () => {
  const { MOBILE, WEB } = ProjectTag;
  const {
    DOCKER,
    FIREBASE,
    GIT,
    JS,
    LINUX,
    MONGO,
    MUI,
    MYSQL,
    NEST,
    NEXT,
    NODEJS,
    NOSQL,
    POSTGRE,
    PRISMA,
    RTK,
    SOCKETIO,
    TAILWIND,
    TS,
    LARAVEL,
    ANGULAR,
    NGRX,
    REACT,
    RN,
    EXPRESS,
    PWA,
  } = Technologies;

  const techs: Techs = {
    [DOCKER]: {
      color: "#242323",
      tech: DOCKER,
    },
    [FIREBASE]: {
      color: "#f0331a",
      tech: FIREBASE,
    },
    [GIT]: {
      color: "#1b9905",
      tech: GIT,
    },
    [JS]: {
      color: "#1b3d15",
      tech: JS,
    },
    [LINUX]: {
      color: "#101a0e",
      tech: LINUX,
    },
    [MONGO]: {
      color: "#3d61b8",
      tech: MONGO,
    },
    [MUI]: {
      color: "#071c4f",
      tech: MUI,
    },
    [MYSQL]: {
      color: "#021d1f",
      tech: MYSQL,
    },
    [NEST]: {
      color: "#8f0778",
      tech: NEST,
    },
    [NEXT]: {
      color: "#594c57",
      tech: NEXT,
    },
    [NODEJS]: {
      color: "#80203b",
      tech: NODEJS,
    },
    [NOSQL]: {
      color: "#343630",
      tech: NOSQL,
    },
    [POSTGRE]: {
      color: "#101f0f",
      tech: POSTGRE,
    },
    [PRISMA]: {
      color: "#131413",
      tech: PRISMA,
    },
    [RTK]: {
      color: "#40222b",
      tech: RTK,
    },
    [SOCKETIO]: {
      color: "#87334c",
      tech: SOCKETIO,
    },
    [TAILWIND]: {
      color: "#151e36",
      tech: TAILWIND,
    },
    [TS]: {
      color: "#10121a",
      tech: TS,
    },
    [LARAVEL]: {
      color: "#402566",
      tech: LARAVEL,
    },
    [ANGULAR]: {
      color: "#023308",
      tech: ANGULAR,
    },
    [NGRX]: {
      color: "#020733",
      tech: NGRX,
    },
    [REACT]: {
      color: "#023d42",
      tech: REACT,
    },
    [RN]: {
      color: "#1a0101",
      tech: RN,
    },
    [PWA]: {
      color: "#241b04",
      tech: PWA,
    },
    [EXPRESS]: {
      color: "#042420",
      tech: EXPRESS,
    },
  };

  const projects: Project[] = [
    {
      title: "Canvaschat",
      tags: [WEB],
      images: [
        `${basePath}/canvaschat/canvaschattool.png`,
        `${basePath}/canvaschat/jackpinemedia.png`,
      ],
      description:
        "Canvaschat is a versatile chat portal that can be embedded into any business website to address customer concerns. It includes an agent portal for responding to customer queries and an admin portal for viewing reports and feedback.",
      link: "https://canvaschattool.com/",
      technologies: [
        techs[NODEJS],
        techs[ANGULAR],
        techs[TS],
        techs[JS],
        techs[SOCKETIO],
        techs[MYSQL],
        techs[GIT],
        techs[LINUX],
        techs[NGRX],
      ],
    },
    {
      title: "Meetsone",
      tags: [WEB, MOBILE],
      images: [
        `${basePath}/meetsone/1.png`,
        `${basePath}/meetsone/meetsone1.png`,
        `${basePath}/meetsone/meetsone2.png`,
        `${basePath}/meetsone/meetsone3.png`,
      ],
      description:
        "Meetsone is a Japanese app that provides businesses with flexible control over their processes and transactions through dynamic forms and efficient reporting, offering functionality similar to a CRM system.",
      link: "https://app.meetsone.com/mm-login",
      technologies: [
        techs[NEST],
        techs[NEXT],
        techs[DOCKER],
        techs[PRISMA],
        techs[RTK],
        techs[GIT],
        techs[POSTGRE],
        techs[TS],
        techs[JS],
        techs[LINUX],
        techs[NODEJS],
      ],
    },
    {
      title: "Fancrew",
      tags: [WEB],
      images: [
        `${basePath}/fancrew/fancrew1.png`,
        `${basePath}/fancrew/fancrew2.png`,
      ],
      description:
        "Fancrew is a web app that enables businesses to create dynamic questionnaires and surveys, helping them gather valuable insights from their customers.",
      link: "https://dev.cr.fancrew.com/admin/login",
      technologies: [
        techs[REACT],
        techs[RTK],
        techs[GIT],
        techs[LINUX],
        techs[DOCKER],
        techs[NEST],
        techs[POSTGRE],
        techs[NODEJS],
      ],
    },
    {
      title: "Requisition App",
      tags: [WEB],
      images: [
        `${basePath}/mymc/mymc1.jpg`,
        `${basePath}/mymc/mymc2.jpg`,
        `${basePath}/mymc/mymc3.jpg`,
        `${basePath}/mymc/mymc4.jpg`,
      ],
      description:
        "Requisition app centralizes the manual process of sending equipment requests from various business addresses to the main office and is deployed internally. It also includes a feature for maintaining an inventory record of each piece of equipment.",
      technologies: [
        techs[ANGULAR],
        techs[NGRX],
        techs[GIT],
        techs[MYSQL],
        techs[NODEJS],
      ],
    },
    {
      title: "Mathieus Pizza Ordering App",
      tags: [MOBILE, WEB],
      images: [
        `${basePath}/mathieus/app.jpg`,
        `${basePath}/mathieus/mathieus.jpg`,
      ],
      description:
        "Mathieu's Pizza Ordering App, exclusively deployed in Leyte for Mathieu's Resto, allows customers to order their favorite pizzas and desserts while featuring a real-time chat function.",
      technologies: [
        techs[ANGULAR],
        techs[NODEJS],
        techs[NGRX],
        techs[EXPRESS],
        techs[PWA],
        techs[LINUX],
        techs[GIT],
        techs[SOCKETIO],
      ],
    },
  ];

  const handleOpenLink = (link: string) => {
    window.open(link, "_blank");
  };

  return {
    handleOpenLink,
    projects,
  };
};
