import React, { useState, useEffect } from "react";
import useDebounce from "../../CustomHooks/useDebounce";

const DebounceSearch2 = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);

  const debounceSearch = useDebounce(search, 1000);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/users/search?q=${debounceSearch}`
        );
        const data = await res.json();
        setResult(data.users || []);
        console.log("API calling !..", debounceSearch);
      } catch (error) {
        console.log(error);
        setResult([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [debounceSearch]);
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Search Todos</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="p-2 border rounded w-full mb-4"
        />
        {loading && <p>Loading...</p>}
        {!loading && result.length === 0 && debounceSearch && (
          <p>No results found.</p>
        )}
        <ul className="space-y-2">
        {result.map((user) => (
          <li key={user.id} className="p-2 border rounded">
            <h2 className="font-semibold">{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
};

export default DebounceSearch2;
