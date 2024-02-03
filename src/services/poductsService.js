import { products } from "../data/products";

export const getProducts = () => {
  return products;
};

export const calculateTotal = (items) => {
  return items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  // console.log(items);
  // const total = items.map((item) => (item.product.price *  item.quantity)).reduce((acc, value)=>  acc + value, 0);
  // console.log(total);
  // return total
};
