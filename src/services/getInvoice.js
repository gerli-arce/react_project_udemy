import {invoice} from '../data/invoice'

export const getInvoice = () => {
    // let total = 0;
    // invoice.items.forEach(item => {
    //     total += item.price * item.quantity
    // })

    const total = invoice.items.map(item => item.price * item.quantity).reduce((acc, value) => acc + value, 0)  

    return {...invoice, total}
    }
