import { useEffect, useState } from "react";
import { getProducts } from "../../services/poductsService";
import { ProductCardView } from "./ProductCardView";
export const CatalogView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <div className="row">
        {products.map(({ id, name, description, price }) => {
          return (
            <div className="col-4 my-2" key={id}>
              <ProductCardView name={name} description={description} price={price} />
            </div>
          );
        })}
      </div>
    </>
  );
};
