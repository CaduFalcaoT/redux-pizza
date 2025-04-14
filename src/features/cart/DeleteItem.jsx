import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delItem } from "./cartSlice";

export default function DeleteItem({ pizzaId, type }) {
  const dispatch = useDispatch();

  return (
    <Button type={type} onClick={() => dispatch(delItem(pizzaId))}>
      Delete
    </Button>
  );
}
