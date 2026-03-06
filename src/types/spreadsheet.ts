export type CellValue = string | number;

export interface Cell {
  value: CellValue;
}

export type SpreadsheetData = {
  [key: string]: Cell;
};