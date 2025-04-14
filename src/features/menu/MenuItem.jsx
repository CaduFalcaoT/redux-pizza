import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemsQuantity from "../cart/UpdateItemsQuantity";

export default function MenuItem({ data }) {
  const { name, unitPrice, imageUrl, ingredients, soldOut, id } = data;

  const dispatch = useDispatch();

  const quantityAdded = useSelector(getQuantityById(id));
  const isInCart = quantityAdded > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 rounded bg-[#ffffff4f] p-4 shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className={`h-32 rounded 2xl:h-48 ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="flex grow flex-col 2xl:gap-4">
        <p className="font-medium 2xl:text-3xl">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic 2xl:text-base">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-end justify-between">
          {!soldOut ? (
            <p className="text-sm 2xl:text-base">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase 2xl:text-base">
              Sold out
            </p>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
          {isInCart && (
            <span className="flex gap-8">
              <UpdateItemsQuantity pizzaId={id} />
              <DeleteItem type="small" pizzaId={id} />
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
