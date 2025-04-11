// Test ID: IIDSAT

import OrderItem from "./OrderItem";

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

export default function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="fixed flex flex-col gap-12 px-4 py-6 w-full max-w-[1024px] h-[calc(100vh-120px)] bg-[#ffffff4f] rounded shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-3xl font-semibold">Pedido #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-4 py-2 text-base font-semibold uppercase tracking-wide text-red-50">
              Prioridade
            </span>
          )}
          <span className="rounded-full bg-green-500 px-4 py-2 text-base font-semibold uppercase tracking-wide text-green-50">
            Pedido {status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded bg-[#7C2700] px-6 py-5">
        <p className="font-medium text-white text-lg">
          {deliveryIn >= 0
            ? `Apenas ${calcMinutesLeft(estimatedDelivery)} minutos faltando 😃`
            : "Pedido deve ter chegado"}
        </p>
        <p className="text-sm text-stone-300">
          (Entrega estimada: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-y-2 bg-[#7C2700] px-6 py-5 rounded">
        <p className="text-base text-stone-300">
          Preço pedido: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-base text-stone-300">
            Preço de prioridade: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-medium text-white text-lg">
          Para pagar na entrega: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
