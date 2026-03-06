"use client";
import { evaluateFormula } from "@/lib/formulas/evaluator";
import Cell from "./Cell";

interface GridProps {
    cells: any;
    setCell: (id: string, value: string) => void;
}

export default function Grid({ cells, setCell }: GridProps) {
    const rows = 10;
    const cols = 10;

    const getCellId = (row: number, col: number) => {
        const letter = String.fromCharCode(65 + col);
        return `${letter}${row + 1}`;
    };

    return (
        <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: cols }).map((_, col) => {
                    const id = getCellId(row, col);

                    return (
                        <Cell
                            key={id}
                            id={id}
                            value={
                                cells[id]?.value?.startsWith("=")
                                    ? evaluateFormula(cells[id].value, cells)
                                    : cells[id]?.value || ""
                            }
                            onChange={setCell}
                        />
                    );
                })
            )}
        </div>
    );
}