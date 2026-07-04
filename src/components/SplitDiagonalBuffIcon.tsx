import type { SplitDiagonalBuffIconProps } from "../types/buffs";

export default function SplitDiagionalBuffIcon({
  bottomLeft,
  topRight,
  triangleClassName = "border-2 border-green-600",
}: SplitDiagonalBuffIconProps) {
  const triangleBase = "absolute inset-0 h-full w-full rounded-sm object-cover";

  return (
    <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-sm">
      {bottomLeft.active !== false && (
        <img
          src={bottomLeft.iconPath}
          alt={bottomLeft.label}
          className={`${triangleBase} ${triangleClassName}`}
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      )}
      {topRight.active !== false && (
        <img
          src={topRight.iconPath}
          alt={topRight.label}
          className={`${triangleBase} ${triangleClassName}`}
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
      )}
    </div>
  );
}
