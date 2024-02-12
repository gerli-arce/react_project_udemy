export const UserRow = ({handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button type="button" onClick={()=>handlerUserSelectedForm({
            id,
            username,
            email
        })} className="btn btn-secondary btn-sm">
          Update
        </button>
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