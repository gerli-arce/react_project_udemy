import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { InvoiceView } from "./components/invoice/InvoiceView";
import { ClientView } from "./components/invoice/ClientView";
import { CompanyView } from "./components/invoice/CompanyView";
import { ListItemView } from "./components/invoice/ListItemsView";
import { TotalView } from "./components/invoice/TotalView";
import { FormItemsView } from "./components/invoice/FormItemsView";

const voiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastname: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    ruc: 0,
  },
  items: [],
};

export const InvoiceApp = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [counter, setCounter] = useState(4);

  const [total, setTotal] = useState(0);

  const [items, setItems] = useState([]);

  const [invoice, setInvoice] = useState(voiceInitial);

  const { id, name: nameInvoice, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddItems = ({ name, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        name: name.trim(),
        price: +price.trim(),
        quantity: +quantity.trim(),
      },
    ]);
    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handlerUpdateItem = (id, updatedItem) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          ...updatedItem
        };
      }
      return item;
    }));
  };


  const onActiveForm = () => {
    setActiveForm(!activeForm);
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

          <ListItemView title={"Productos de factura"} items={items} handlerDeleteItem={id =>handlerDeleteItem(id)}/>
          <TotalView total={total} />
          <button className="btn btn-secondary" onClick={onActiveForm}>
            {!activeForm ? "Agregar Item" : "Ocultar Formulario"}
          </button>
          {!activeForm || <FormItemsView handler={handlerAddItems} />}
        </div>
      </div>
    </div>
  );
};
