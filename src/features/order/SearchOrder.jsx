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
        placeholder="Pesquisar pedido #"
        className="text-base w-[291px] h-14 border border-[#AE3700] bg-[#ffffff4f] text-black rounded-4xl px-4 focus:ring-2 outline-0 transition-all duration-300 focus:ring-[#AE3700]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
