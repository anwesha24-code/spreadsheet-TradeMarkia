export function parseFormula(formula: string) {
  const match = formula.match(/^=(\w+)\((.+)\)$/);

  if (!match) return null;

  const func = match[1].toUpperCase();
  const range = match[2];

  return { func, range };
}