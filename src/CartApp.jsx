import { CartView } from "./components/cart/CartView";
import { CatalogView } from "./components/cart/CatalogView";

export const CartApp = () => {
  return (
    <>
      <div className="container">
        <h3>Card App</h3>
        <CatalogView />
        <div className="my-4 w-50">
            <CartView/>
        </div>
      </div>
    </>
  );
};
