import { useState } from "react";

export const FormItemsView = ({handler}) => {
  const [formItemsState, setFormItemsState] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const { name, price, quantity } = formItemsState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || price.trim() === "" || quantity.trim() === "")
      return console.log("Campos vacios");

    
    handler(formItemsState);

    setFormItemsState({
      name: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <form className="w-50" onSubmit={onInvoiceSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Nombre"
          className="form-control m-3"
          onChange={onInputChange}
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Precio"
          className="form-control m-3"
          onChange={onInputChange}
        />
        <input
          type="number"
          name="quantity"
          value={quantity}
          placeholder="Cantidad"
          className="form-control m-3"
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-success  m-3">
          Crear Item
        </button>
      </form>
    </>
  );
};
