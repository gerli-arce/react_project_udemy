import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const UserRow = ({ id, username, email }) => {
  const { handlerUserSelectedForm, handlerRemoveUser } =
    useContext(UserContext);
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          onClick={() =>
            handlerUserSelectedForm({
              id,
              username,
              email,
            })
          }
          className="btn btn-secondary btn-sm"
        >
          Update
        </button>
      </td>
      <td>
        <NavLink to={`/users/edit/${id}`} className="btn btn-secondary btn-sm">
          Update Route
        </NavLink>
      </td>
      <td>
        <button
          onClick={() => handlerRemoveUser(id)}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
