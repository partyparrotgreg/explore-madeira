import CalhetaRegionSVG from "@/assets/calheta.svg";
import CamareDeLobosRegionSVG from "@/assets/camara-de-lobos.svg";
import FunchalRegionSVG from "@/assets/funchal.svg";
import MachicoRegionSVG from "@/assets/machico.svg";
import PontaDoSolRegionSVG from "@/assets/ponta-do-sol.svg";
import PortoMonizRegionSVG from "@/assets/porto-moniz.svg";
import RibeiraBravaRegionSVG from "@/assets/ribeira-brava.svg";
import SantaCruzRegionSVG from "@/assets/santa-cruz.svg";
import SantanaRegionSVG from "@/assets/santana.svg";
import SaoVicenteRegionSVG from "@/assets/sao-vicente.svg";
import { RegionType } from "./types";

export const regions: RegionType[] = [
  {
    id: 1,
    name: "Funchal",
    slug: "funchal",
    description:
      "The capital and largest city of Madeira, known for its historical sites, beautiful gardens, and vibrant atmosphere.",
    image: FunchalRegionSVG,
    color: "#22D3EE",
    path: "M1209.38 638.125l-24.66-28.667-16-28-64-40-120.004 124 24.004 124-36.246 96 31.996 32h32l32 32 32-32h32l32-32h128l32 32h16.25l-56-200-75.34-79.333z",
    order: 9,
  },
  {
    id: 2,
    name: "Câmara de Lobos",
    slug: "camara-de-lobos",
    description:
      "A picturesque fishing village with colorful boats and a lively waterfront, famous for its traditional Madeira Poncha drink.",
    image: CamareDeLobosRegionSVG,
    color: "#60A5FA",
    path: "M984.716 665.458l120.004-124-28-76-60-32-88.004 40v108l-92 208-52 32h91.758l64 64h32l36.246-96-24.004-124z",
    order: 8,
  },
  {
    id: 3,
    name: "Ribeira Brava",
    slug: "ribeira-brava",
    description:
      "A small coastal town with a pebble beach and a charming promenade, located on the south coast of Madeira.",
    image: RibeiraBravaRegionSVG,
    color: "#818CF8",
    path: "M928.716 581.458v-108l-132-12-72 32-128 264h87.758l64 64h36.242l52-32 92-208z",
    order: 7,
  },
  {
    id: 4,
    name: "Ponta do Sol",
    slug: "ponta-do-sol",
    description:
      "One of the sunniest regions on the island, known for its banana plantations and stunning cliffs.",
    image: PontaDoSolRegionSVG,
    color: "#A78BFA",
    path: "M632.716 405.458l-120 88-84.242 168 96 96h72.242l128-264-92-88z",
    order: 6,
  },
  {
    id: 5,
    name: "Calheta",
    slug: "calheta",
    description:
      "A region famous for its sandy artificial beach and the beautiful Laurisilva forest, a UNESCO World Heritage site.",
    image: CalhetaRegionSVG,
    color: "#E879F9",
    path: "M632.716 405.458l-16-28-72 40-120-12-88-160-32 28-180-140-112 112 64 64v32l32 32v64h32v32l128 128h64l64 64h31.758l84.242-168 120-88z",
    order: 5,
  },
  {
    id: 6,
    name: "Porto Moniz",
    slug: "porto-moniz",
    description:
      "Located on the north coast, this region is renowned for its natural volcanic swimming pools and rugged coastal landscapes.",
    image: PortoMonizRegionSVG,
    color: "#FACC15",
    path: "M336.716 245.458l88 160 120 12 72-40 48-132h-76.242l-32-32h-31.758l-192-192h-96l-112 112 180 140 32-28z",
    order: 1,
  },
  {
    id: 7,
    name: "Santana",
    slug: "santana",
    description:
      "Known for its traditional thatched-roof houses and the Parque Temático da Madeira, an attraction dedicated to the island's culture.",
    image: SantanaRegionSVG,
    color: "#A3E635",
    path: "M1040.72 321.458l-36 52 24 16-12 44 60 32 28 76 64 40 16 28 44-4 24-88 80-16 76.59-171.166-148.84-148.834h-32l-32-32h-64l-32 32H964.716l68.004 44 8 96z",
    order: 3,
  },
  {
    id: 8,
    name: "São Vicente",
    slug: "sao-vicente",
    description:
      "A region characterized by lush greenery and the famous São Vicente Caves, formed by volcanic activity.",
    image: SaoVicenteRegionSVG,
    color: "#FB923C",
    path: "M632.716 405.458l92 88 72-32 132 12 88.004-40 12-44-24-16 36-52-8-96-68.004-44h-56.242l-64 64H664.716l-48 132 16 28z",
    order: 2,
  },
  {
    id: 9,
    name: "Machico",
    slug: "machico",
    description:
      "One of the oldest regions on the island, Machico is known for its historical significance and its golden sandy beach.",
    image: MachicoRegionSVG,
    color: "#4ADE80",
    path: "M1932.72 533.458l-64-64h-32.25l-32 32h-64l-32-32h-96l-32-32h-64l-107.16-107.167-76.59 171.167-80 16-24 88-44 4 24.66 28.667 163.34-88.667 144 52 108 80 20-20v-32l96-96h96l32-32 30 32 34 32h32v-32h-32z",
    order: 4,
  },
  {
    id: 10,
    name: "Santa Cruz",
    slug: "santa-cruz",
    description:
      "A coastal region near the airport, with charming villages, pebbled beaches, and the popular Aquaparque.",
    image: SantaCruzRegionSVG,
    color: "#2DD4BF",
    path: "M1372.72 549.458l-163.34 88.667 75.34 79.333 56 200h80l96-96v-64l32-32h32l44-44-108-80-144-52z",
    order: 10,
  },
];
