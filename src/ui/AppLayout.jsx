import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header className="flex gap-8 p-8 items-center">
        <p className="text-[32px] text-gray-900 2xl:text-4xl">
          FAST REACT PIZZA CO.
        </p>
        <input
          type="text"
          placeholder="Pesquisar pedido #"
          className="text-base w-[291px] h-14 border border-[#AE3700] bg-[#ffffff4f] text-black rounded-4xl px-4 focus:ring-2 outline-0 transition-all duration-300 focus:ring-[#AE3700]"
        />
      </header>
      <main className="p-8 w-full">
        <Outlet />
      </main>
    </>
  );
}
