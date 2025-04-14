import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="flex w-full max-w-[1024px] flex-col gap-4">
      {menu &&
        menu.map((menuItem) => {
          return <MenuItem data={menuItem} key={menuItem.id} />;
        })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
