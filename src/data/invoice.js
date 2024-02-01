export const invoice = {
  id: 1,
  name: "John Doe",
  client: {
    name: "Yon Gerli",
    lastname: "Infante Arce",
    address: {
      country: "Perú",
      city: "Lima",
      street: "Av. Los Alamos",
      number: 123,
    },
  },
  company: {
    name: "CONORLD S.A.C.",
    ruc: 123456789,
  },
  items: [
    {id:1, name: "Item 1", quantity: 1, price: 100 },
    {id:2, name: "Item 2", quantity: 1, price: 200 },
    {id:3, name: "Item 3", quantity: 1, price: 300 },
  ],
};
