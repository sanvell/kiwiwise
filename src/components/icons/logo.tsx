import type { SVGProps } from "react";

export function KiwiWiseLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <g className="font-headline" fontSize="38" fontWeight="bold">
        <text x="5" y="38" className="fill-primary">
          Kiwi
        </text>
        <text x="85" y="38" className="fill-foreground">
          Wise
        </text>
      </g>
      <path
        d="M 68 10 C 60 2, 50 15, 68 10"
        strokeWidth="3"
        className="stroke-primary fill-none"
        strokeLinecap="round"
      />
    </svg>
  );
}
