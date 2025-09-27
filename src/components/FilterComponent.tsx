import { SlidersHorizontal } from "lucide-react";

export function FilterComponent() {
  return (
    <div className="w-full mt-4">
      <div className="flex items-center gap-4 p-4 bg-card border border-border/50 shadow-sm rounded-xl">
        {/* Filters Label */}
        <div className="flex items-center gap-4 font-semibold">
          <SlidersHorizontal className="w-4 h-4" />
          Filters:
        </div>

        {/* Genre Filter */}
        <select className="px-3 py-1 rounded-lg border border-input bg-gray-100 text-sm">
          <option>All</option>
          <option>Pop</option>
          <option>Rock</option>
          <option>Hip hop</option>
        </select>

        {/* Year Filter */}
        <select className="px-3 py-1 rounded-lg border border-input bg-gray-100 text-sm">
          <option>All</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>

        {/* Duration Filter */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Duration:
          <input
            type="text"
            placeholder="Min"
            className="w-16 px-2 py-1 rounded-lg border border-input bg-gray-100 text-sm"
          />
          -
          <input
            type="text"
            placeholder="Max"
            className="w-16 px-2 py-1 rounded-lg border border-input bg-gray-100 text-sm"
          />
          min
        </div>
      </div>
    </div>
  );
}
