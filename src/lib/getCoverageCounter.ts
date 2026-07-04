import { getCoverageProgressColor } from "./getCoverageProgressColor";

export function getCoverageCounter(covered: number, total: number) {
  return {
    label: `${covered} / ${total}`,
    color: getCoverageProgressColor(covered, total),
  };
}
