export function cleanInput(input: string): string[] {
  const clean = input.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return clean;
}
