import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const username = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="fixed flex h-[calc(100vh-120px)] w-full max-w-[1024px] flex-col gap-8 rounded bg-[#ffffff4f] p-12">
      <Link
        to="/menu"
        className="text-xl font-bold text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="text-3xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button
          type="secondary"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
