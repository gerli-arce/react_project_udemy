import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/cart/CatalogView"
import { CartView } from "../components/cart/CartView"

export const CartRoutes = ({handlerAddProductCart, handlerDeleteProduct, cartItems}) => {

    return (
        <Routes>
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />

            <Route
                path="cart"
                element={
                    cartItems?.length <= 0 ? (
                        <div className="alert alert-warning">
                            No hay productos en el carrito de compras!!
                        </div>
                    ) : (
                        <div className="my-4 w-50">
                            <CartView
                                items={cartItems}
                                handlerDelete={handlerDeleteProduct}
                            />
                        </div>
                    )
                }
            />

            <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
    )

}