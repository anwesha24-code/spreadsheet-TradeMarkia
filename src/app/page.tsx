"use client";

import Grid from "@/components/spreadsheet/Grid";
import { useSpreadsheetStore } from "@/store/spreadsheetStore";

export default function Home() {
  const { cells, setCell } = useSpreadsheetStore();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-5">Spreadsheet</h1>
      <Grid cells={cells} setCell={setCell} />
    </main>
  );
}