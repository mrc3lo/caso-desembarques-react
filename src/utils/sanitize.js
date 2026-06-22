export function sanitizeText(text) {
  if (!text) return "";

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9áéíóúñ\s]/gi, "");
}