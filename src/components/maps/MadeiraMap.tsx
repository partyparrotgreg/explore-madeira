"use client";

import { RegionType } from "@/lib/types";

export const MadeiraMap = ({
  region,
  regions,
  ...props
}: {
  region: string | null;
  regions: RegionType[] | undefined;
}) => {
  if (!regions) return <div>Defin regions!</div>;

  const orderedRegions = regions.sort((a, b) => a.order - b.order);

  return (
    <svg fill="none" {...props} viewBox="0 0 1989 975">
      <g>
        <path
          transform={"translate(15, 30)"}
          d="M0.239502 224L224.24 0H320.24L512.24 192H543.998L575.998 224H831.998L895.998 160H1088L1120 128H1184L1216 160H1248L1504 416H1568L1600 448H1696L1728 480H1792L1824 448H1856.24L1920.24 512H1952.24V544H1920.24L1886.24 512L1856.24 480L1824.24 512H1728.24L1632.24 608V640L1568.24 704H1536.24L1504.24 736V800L1408.24 896H1312L1280 864H1152L1120 896H1088L1056 928L1024 896H991.998L959.998 864H927.998L863.998 800H735.998L671.998 736H511.998L415.998 640H384.24L320.24 576H256.24L128.24 448V416H96.2395V352L64.2395 320V288L0.239502 224Z"
          className="fill-foreground"
        />
      </g>
      <g>
        {orderedRegions.map(({ id, color, slug, path }) => (
          <path
            key={id}
            id={slug}
            d={
              path ??
              "M632.716 405.458l-120 88-84.242 168 96 96h72.242l128-264-92-88z"
            }
            strokeWidth={5}
            stroke="black"
            fill={region === slug ? "white" : color}
            transform={region == slug ? "translate(-10,-20)" : "translate(0,0)"}
            className="transition-all"
          />
        ))}
      </g>
      {/* <g transform="translate(10,20)">
        <path
          id="ponta-do-sol"
          d="M632.716 405.458l-120 88-84.242 168 96 96h72.242l128-264-92-88z"
          fill="#A78BFA"
          strokeWidth={strokeWidth}
          transform={translation}
          z={50}
          className="stroke-foreground"
        />
        <path
          d="M632.716 405.458l-16-28-72 40-120-12-88-160-32 28-180-140-112 112 64 64v32l32 32v64h32v32l128 128h64l64 64h31.758l84.242-168 120-88z"
          fill="#E879F9"
          strokeWidth={strokeWidth}
          transform={translation}
          className="stroke-foreground"
        />
        <path
          d="M336.716 245.458l88 160 120 12 72-40 48-132h-76.242l-32-32h-31.758l-192-192h-96l-112 112 180 140 32-28z"
          fill="#FACC15"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M1040.72 321.458l-36 52 24 16-12 44 60 32 28 76 64 40 16 28 44-4 24-88 80-16 76.59-171.166-148.84-148.834h-32l-32-32h-64l-32 32H964.716l68.004 44 8 96z"
          fill="#A3E635"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M632.716 405.458l92 88 72-32 132 12 88.004-40 12-44-24-16 36-52-8-96-68.004-44h-56.242l-64 64H664.716l-48 132 16 28z"
          fill="#FB923C"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M1372.72 549.458l-163.34 88.667 75.34 79.333 56 200h80l96-96v-64l32-32h32l44-44-108-80-144-52z"
          fill="#2DD4BF"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M1932.72 533.458l-64-64h-32.25l-32 32h-64l-32-32h-96l-32-32h-64l-107.16-107.167-76.59 171.167-80 16-24 88-44 4 24.66 28.667 163.34-88.667 144 52 108 80 20-20v-32l96-96h96l32-32 30 32 34 32h32v-32h-32z"
          fill="#4ADE80"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M984.716 665.458l120.004-124-28-76-60-32-88.004 40v108l-92 208-52 32h91.758l64 64h32l36.246-96-24.004-124z"
          fill="#60A5FA"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M928.716 581.458v-108l-132-12-72 32-128 264h87.758l64 64h36.242l52-32 92-208z"
          fill="#818CF8"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
        <path
          d="M1209.38 638.125l-24.66-28.667-16-28-64-40-120.004 124 24.004 124-36.246 96 31.996 32h32l32 32 32-32h32l32-32h128l32 32h16.25l-56-200-75.34-79.333z"
          fill="#22D3EE"
          className="stroke-foreground"
          strokeWidth={strokeWidth}
          transform={translation}
        />
      </g> */}
    </svg>
  );
};

MadeiraMap.displayName = "MadeiraMap";
