import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        className="h-14 w-[291px] rounded-4xl border border-[#AE3700] bg-[#ffffff4f] px-4 text-base text-black outline-0 transition-all duration-300 focus:ring-2 focus:ring-[#AE3700]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
