
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { searchBooks } from "@/services/books";

interface SearchBarProps {
  onSearchResult: (results: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchResult }) => {
  const [titleName, setTitleName] = useState("");
  const [debouncedTitleName] = useDebounce(titleName, 200);

  // Function to handle search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!debouncedTitleName) return;

    try {
      const bookResult = await searchBooks(debouncedTitleName);
      onSearchResult(bookResult); // Llamar al prop con los resultados
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={titleName}
        onChange={(e) => setTitleName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
        placeholder="Search for books..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBar;

