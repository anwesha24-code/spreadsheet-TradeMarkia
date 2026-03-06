import { useState } from "react";
import { SpreadsheetData } from "@/types/spreadsheet";

export const useSpreadsheetStore = () => {
  const [cells, setCells] = useState<SpreadsheetData>({});

  const setCell = (id: string, value: string) => {
    setCells((prev) => ({
      ...prev,
      [id]: { value }
    }));
  };

  return { cells, setCell };
};