import { Link, Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

export default function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <header className="flex gap-8 p-8 items-center">
        <Link className="text-[32px] text-gray-900 2xl:text-4xl" to="/">
          FAST REACT PIZZA CO.
        </Link>
        <SearchOrder />
      </header>
      <main className="p-8 w-full justify-center flex">
        <Outlet />
      </main>
    </>
  );
}
