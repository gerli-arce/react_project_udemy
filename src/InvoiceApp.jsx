import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./components/invoice/InvoiceView";
import { ClientView } from "./components/invoice/ClientView";
import { CompanyView } from "./components/invoice/CompanyView";
import { ListItemView } from "./components/invoice/ListItemsView";
import { TotalView } from "./components/invoice/TotalView";

export const InvoiceApp = () => {
  const {
    total,
    id,
    name: nameInvoice,
    client,
    company,
    items: itemsInitial,
  } = getInvoice();

  // const [nameValue, setNameValue] = useState("");
  // const [priceValue, setPriceValue] = useState("");
  // const [quantityValue, setQuantityValue] = useState("");

  const [formItemsState, setFormItemsState] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const { name, price, quantity } = formItemsState;

  const [items, setItems] = useState(itemsInitial);

  const [counter, setCounter] = useState(4);

  // const onNameChange = (event) => {
  //   console.log(event.target.value);
  //   setNameValue(event.target.value);
  // }

  // const onPriceChange = (event) => {
  //   console.log(event.target.value);
  //   setPriceValue(event.target.value);
  // }

  // const onQuantityChange = (event) => {
  //   console.log(event.target.value);
  //   setQuantityValue(event.target.value);
  // }

  const onInputChange = ({ target: {name, value} }) => {
    console.log(name, value);
    setFormItemsState({
      ...formItemsState,
      [name]: value,
    });
  };

  const onInvoiceSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim() === "" ||
      price.trim() === "" ||
      quantity.trim() === ""
    )
      return console.log("Campos vacios");

    setItems([
      ...items,
      {
        id: counter,
        name: name.trim(),
        price: +price.trim(),
        quantity: +quantity.trim(),
      },
    ]);
    setFormItemsState({
      name: "",
      price: "",
      quantity: "",
    });
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div className="card my-2">
        <div className="card-header">Ejemplo de Factura</div>
        <div className="card-body">
          <InvoiceView id={id} name={nameInvoice} />
          <div className="row my-2">
            <div className="col">
              <ClientView title={"Datos de Cliente "} client={client} />
            </div>
            <div className="col">
              <CompanyView title={"Datos de Empresa"} company={company} />
            </div>
          </div>

          <ListItemView title={"Productos de factura"} items={items} />
          <TotalView total={total} />
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
        </div>
      </div>
    </div>
  );
};
