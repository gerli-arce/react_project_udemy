import { getInvoice } from "./services/getInvoice";
import { InvoiceView} from "./components/invoice/InvoiceView";
import { ClientView } from "./components/invoice/ClientView";
import { CompanyView } from "./components/invoice/CompanyView";
import { ListItemView } from "./components/invoice/ListItemsView";
import { TotalView } from "./components/invoice/TotalView";

export const InvoiceApp = () => {
  const {total, id, name, client, company, items } = getInvoice();
  

  return (
    <div className="container">
      <div className="card my-2">
        <div className="card-header">Ejemplo de Factura</div>
        <div className="card-body">
            <InvoiceView id={id} name={name} />
          <div className="row my-2">
            <div className="col">
                <ClientView  title={'Datos de Cliente '} client={client} />
            </div>
            <div className="col">
                <CompanyView  title={'Datos de Empresa'} company={company} />
            </div>
          </div>

          <ListItemView title={'Productos de factura'} items={items} />
        <TotalView total={total}/>
        </div>
      </div>
    </div>
  );
};
