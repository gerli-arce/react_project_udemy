import PropTypes from 'prop-types';

export const RowItemView = ({id, name, price, quantity, handlerDeleteItem}) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button className='btn btn-danger' onClick={()=>handlerDeleteItem(id)}>Eliminar</button></td>
      </tr>
    </>
  );
};

RowItemView.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};