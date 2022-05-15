import { useContext, createContext, useState } from "react";

export const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (valueSearch) => {
    setSearch(valueSearch);
  };

  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
