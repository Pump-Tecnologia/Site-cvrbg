import { PawPrint } from "lucide-react";
import type { CSSProperties } from "react";

type Paw = {
  size: number;
  rotate: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const PAWS: Paw[] = [
  { size: 132, rotate: -16, top: "-3%", left: "4%" },
  { size: 92, rotate: 14, bottom: "6%", left: "14%" },
  { size: 168, rotate: 22, top: "14%", right: "7%" },
  { size: 104, rotate: -8, bottom: "-4%", right: "20%" },
];

/**
 * Extremely discreet outlined-paw decoration built from the lucide PawPrint
 * icon. Hollow strokes at very low opacity — atmosphere without noise.
 */
export function PawField({
  className = "text-white/[0.035]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {PAWS.map((paw, index) => {
        const style: CSSProperties = {
          position: "absolute",
          top: paw.top,
          bottom: paw.bottom,
          left: paw.left,
          right: paw.right,
          transform: `rotate(${paw.rotate}deg)`,
        };
        return (
          <PawPrint key={index} size={paw.size} strokeWidth={1} style={style} />
        );
      })}
    </div>
  );
}
