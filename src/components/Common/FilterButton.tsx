import { useState } from "react";

interface FilterButtonProps {
  onSortChange: (sortOrder: "newest" | "oldest") => void;
}

export default function FilterButton({ onSortChange }: FilterButtonProps) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const handleSortClick = () => {
    const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
    setSortOrder(newSortOrder);
    onSortChange(newSortOrder);
  };

  return (
    <button
      onClick={handleSortClick}
      className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
    >
      <img src="/filter_icon.svg" alt="Filter" className="w-4 h-4" />
      <span>Sort by {sortOrder === "newest" ? "Newest" : "Oldest"}</span>
    </button>
  );
}
