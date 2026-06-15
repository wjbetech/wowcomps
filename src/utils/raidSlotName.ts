export function sanitizeRaidSlotName(name: string) {
  const sanitizedValue = name
    .replace(/[^\p{L}\p{N} ]+/gu, "")
    .trim()
    .slice(0, 12);

  if (sanitizedValue !== name) {
    return "";
  }

  return sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1);
}
