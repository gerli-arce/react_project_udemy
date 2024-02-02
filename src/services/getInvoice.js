import { invoice } from "../data/invoice";

export const getInvoice = () => {
  const total = calculateTotal(invoice.items);
  return { ...invoice, total };
};

export const calculateTotal = (items) => {
  const total = items
    .map((item) => item.price * item.quantity)
    .reduce((acc, value) => acc + value, 0);
  return total;
};
