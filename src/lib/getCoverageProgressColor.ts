export function getCoverageProgressColor(covered: number, total: number): string {
  // no buffs => return stone-400
  if (total === 0) return "text-stone-400";

  // dynamic ratio * hue formula
  const ratio = Math.min(1, Math.max(0, covered / total));
  const hue = Math.round(ratio * 120);

  // return the calculated color
  return `hsl(${hue}, 70%, 55%)`;
}
