export function parseOffsetLines(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const sep = line.indexOf(":");
      const label = line.slice(0, sep).trim();
      const value = line.slice(sep + 1).trim();
      const match = /^(\d+)\s+(.+)$/.exec(label);
      return {
        count: match?.[1] ?? "",
        unit: match?.[2] ?? label,
        value,
      };
    });
}
