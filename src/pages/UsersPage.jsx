import { useContext } from "react";
import { UserModalForm } from "../components/users/UserModalForm";
import { UsersList } from "../components/users/UsersList";
import { UserContext } from "../context/UserContext";

export const UsersPage = () => {
  const {
    users,
    visibleForm,
    handlerOpenForm,
  } = useContext(UserContext);

  return (
    <>
      {!visibleForm || <UserModalForm />}
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button
                onClick={handlerOpenForm}
                className="btn btn-primary my-2"
              >
                Nuevo Usuario
              </button>
            )}

            {users.length == 0 ? (
              <div className="alert alert-warning">No users register!!</div>
            ) : (
              <UsersList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
