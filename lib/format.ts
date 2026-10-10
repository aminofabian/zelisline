const INDEX_PAD_LENGTH = 2;
const PACKAGE_NAME_PATTERN = /^(.*?)\s*\((.*)\)\s*$/;
const DECORATIVE_MARKER_PATTERN = /^❈\s*/;

export function formatIndex(position: number): string {
  return String(position).padStart(INDEX_PAD_LENGTH, "0");
}

export function splitPackageName(name: string): { title: string; tag?: string } {
  const match = name.match(PACKAGE_NAME_PATTERN);
  if (!match) return { title: name };
  return { title: match[1], tag: match[2] };
}

export function stripDecorativeMarker(text: string): string {
  return text.replace(DECORATIVE_MARKER_PATTERN, "");
}
