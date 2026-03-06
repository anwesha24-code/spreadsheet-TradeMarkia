"use client";

interface CellProps {
  id: string;
  value: string;
  onChange: (id: string, value: string) => void;
}

export default function Cell({ id, value, onChange }: CellProps) {
  return (
    <input
      className="border w-24 h-10 text-center"
      value={value || ""}
      onChange={(e) => onChange(id, e.target.value)}
    />
  );
}