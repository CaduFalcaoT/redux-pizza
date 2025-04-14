import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="fixed flex h-[calc(100vh-120px)] w-full max-w-[1024px] flex-col gap-8 rounded bg-[#ffffff4f] p-12">
      <Link
        to="/menu"
        className="text-xl font-bold text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <p className="text-3xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
