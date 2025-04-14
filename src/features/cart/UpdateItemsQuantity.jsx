import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, getQuantityById, increaseItem } from "./cartSlice";

export default function UpdateItemsQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(increaseItem(pizzaId))}>
        {"\u002B"}
      </Button>
      <p>{quantity}</p>
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        &minus;
      </Button>
    </div>
  );
}
