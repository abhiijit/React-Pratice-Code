import React, { useState, useEffect } from "react";
import useDebounce from "../../CustomHooks/useDebounce";

const DebounceSearch = () => {
  const [input, setInput] = useState("");

  const debounceSearch = useDebounce(input, 1000);

  useEffect(() => {
    if (debounceSearch) {
      console.log("API calling !..", debounceSearch);
    }
  }, [debounceSearch]);
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search.."
      />
    </>
  );
};

export default DebounceSearch;
