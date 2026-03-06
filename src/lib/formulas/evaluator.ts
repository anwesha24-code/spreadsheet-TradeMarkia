import { parseFormula } from "./formulaParser";
import { getCellsFromRange } from "./range";

export function evaluateFormula(formula: string, cells: any) {
  const parsed = parseFormula(formula);

  if (!parsed) return formula;

  const { func, range } = parsed;

  const cellIds = getCellsFromRange(range);

  const values = cellIds
    .map((id) => Number(cells[id]?.value))
    .filter((v) => !isNaN(v));

  if (values.length === 0) return 0;

  switch (func) {
    case "SUM":
      return values.reduce((a, b) => a + b, 0);

    case "AVG":
      return values.reduce((a, b) => a + b, 0) / values.length;

    case "MIN":
      return Math.min(...values);

    case "MAX":
      return Math.max(...values);

    default:
      return "ERROR";
  }
}