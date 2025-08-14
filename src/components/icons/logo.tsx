import type { SVGProps } from "react";

export function ClearPathLogo(props: SVGProps<SVGSVGElement>) {
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
          Clear
        </text>
        <text x="100" y="38" className="fill-foreground">
          Path
        </text>
      </g>
    </svg>
  );
}
