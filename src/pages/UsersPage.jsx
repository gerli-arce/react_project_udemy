import { UserModalForm } from "../components/users/UserModalForm";
import { UsersList } from "../components/users/UsersList";

export const UsersPage = ({
  users,
  userSelected,
  initialUserForm,
  visibleForm,
  handlerAddUser,
  handlerRemoveUser,
  handlerUserSelectedForm,
  handlerOpenForm,
  handlerCloseForm,
}) => {

  return (
    <>
      {!visibleForm || (
        <UserModalForm
          handlerAddUser={handlerAddUser}
          initialUserForm={initialUserForm}
          userSelected={userSelected}
          handlerCloseForm={handlerCloseForm}
        />
      )}
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
              <UsersList
                users={users}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
