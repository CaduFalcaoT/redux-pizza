import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";
import CartOverview from "../features/cart/CartOverview";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { formatName } from "../utils/helpers";

export default function AppLayout() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";

  const username = useSelector((state) => state.user.name);

  useEffect(() => {
    if (username === "") navigate("/");
  }, [username, navigate]);

  return (
    <>
      {isLoading && <Loader />}
      <header className="flex items-center gap-8 p-8">
        <Link className="text-[32px] text-gray-900 2xl:text-4xl" to="/">
          FAST REACT PIZZA CO.
        </Link>
        <SearchOrder />
        {username && (
          <p className="text-2xl font-medium">Hello, {formatName(username)}!</p>
        )}
      </header>
      <main className="flex w-full justify-center p-8">
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
}
