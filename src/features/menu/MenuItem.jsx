import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

export default function MenuItem({ data }) {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = data;

  return (
    <li className="flex gap-4 p-4 bg-[#ffffff4f] rounded shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className={`h-32 2xl:h-48 rounded  ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="flex grow flex-col 2xl:gap-4">
        <p className="font-medium 2xl:text-3xl">{name}</p>
        <p className="text-sm capitalize italic text-stone-500 2xl:text-base">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm 2xl:text-base">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500 2xl:text-base">
              Sold out
            </p>
          )}

          <Button type="primary">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}
