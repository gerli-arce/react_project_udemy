import PropTypes from 'prop-types';

export const CompanyView = ({ title,company }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className="list-group">
        <li className="list-group-item active">{company.name}</li>
        <li className="list-group-item">{company.ruc}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ruc: PropTypes.number.isRequired,
  }).isRequired,
};