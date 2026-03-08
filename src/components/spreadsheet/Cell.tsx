"use client";

interface CellProps {
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
  onKeyDown: (e: any) => void;
  cellRef: (el: HTMLInputElement | null) => void;
}

export default function Cell({
  id,
  value,
  onChange,
  onKeyDown,
  cellRef
}: CellProps) {
  return (
    <input
      ref={cellRef}
      className="w-24 h-10 border px-2 outline-none"
      value={value || ""}
      onChange={(e) => onChange(id, e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
}