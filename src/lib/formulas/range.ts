export function getCellsFromRange(range: string) {
  const [start, end] = range.split(":");

  const startCol = start.charCodeAt(0);
  const startRow = parseInt(start.slice(1));

  const endCol = end.charCodeAt(0);
  const endRow = parseInt(end.slice(1));

  const cells: string[] = [];

  for (let col = startCol; col <= endCol; col++) {
    for (let row = startRow; row <= endRow; row++) {
      cells.push(String.fromCharCode(col) + row);
    }
  }

  return cells;
}