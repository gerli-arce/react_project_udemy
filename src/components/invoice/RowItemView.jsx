import PropTypes from 'prop-types';

export const RowItemView = ({name, price, quantity}) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};

RowItemView.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};