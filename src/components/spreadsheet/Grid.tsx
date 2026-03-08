"use client";

import { evaluateFormula } from "@/lib/formulas/evaluator";
import Cell from "./Cell";
import { useRef } from "react";

interface GridProps {
    cells: any;
    setCell: (id: string, value: string) => void;
}

export default function Grid({ cells, setCell }: GridProps) {
    const rows = 10;
    const cols = 10;

    // Ref matrix to store cell DOM references
    const cellRefs = useRef<any[][]>([]);

    const getCellId = (row: number, col: number) => {
        const letter = String.fromCharCode(65 + col);
        return `${letter}${row + 1}`;
    };
    const handleKeyDown = (e: any, row: number, col: number) => {
        if (!cellRefs.current[row] || !cellRefs.current[row][col]) return;

        let newRow = row;
        let newCol = col;

        switch (e.key) {
            case "ArrowUp":
                newRow = row - 1;
                break;

            case "ArrowDown":
                newRow = row + 1;
                break;

            case "ArrowLeft":
                newCol = col - 1;
                break;

            case "ArrowRight":
                newCol = col + 1;
                break;

            case "Enter":
            case "Tab":
                e.preventDefault();
                newRow = row + 1;
                break;

            default:
                return;
        }

        // Boundary check
        if (newRow < 0 || newCol < 0) return;
        if (newRow >= rows || newCol >= cols) return;

        cellRefs.current[newRow]?.[newCol]?.focus();
    };
    return (
        <div className="overflow-auto">

            {/* Column Headers */}
            <div className="flex">
                <div className="w-12 h-10 border bg-gray-200"></div>

                {Array.from({ length: cols }).map((_, colIndex) => (
                    <div
                        key={colIndex}
                        className="w-24 h-10 flex items-center justify-center border bg-gray-200 font-semibold"
                    >
                        {String.fromCharCode(65 + colIndex)}
                    </div>
                ))}
            </div>

            {/* Rows */}
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex">

                    {/* Row number */}
                    <div className="w-12 h-10 flex items-center justify-center border bg-gray-200">
                        {rowIndex + 1}
                    </div>

                    {Array.from({ length: cols }).map((_, colIndex) => {
                        const id = getCellId(rowIndex, colIndex);

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
                                onKeyDown={(e: any) => handleKeyDown(e, rowIndex, colIndex)}
                                cellRef={(el: any) => {
                                    if (!cellRefs.current[rowIndex]) {
                                        cellRefs.current[rowIndex] = [];
                                    }
                                    cellRefs.current[rowIndex][colIndex] = el;
                                }}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}