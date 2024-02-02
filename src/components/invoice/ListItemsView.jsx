import { RowItemView } from "./RowItemView";
import PropTypes from "prop-types";

export const ListItemView = ({ title, items, handlerDeleteItem }) => {
  return (
    <>
      <h2>{title}</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>Producto</td>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Eliminar</td>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, price, quantity }) => (
            <RowItemView
              key={id}
              id={id}
              name={name}
              price={price}
              quantity={quantity}
              handlerDeleteItem={id =>handlerDeleteItem(id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

ListItemView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
