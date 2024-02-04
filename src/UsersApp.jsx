import { useReducer, useState } from "react";
import { UserForm } from "./components/users/UserForm";
import { UsersList } from "./components/users/UsersList";
import { usersReducer } from "./reducer/usersReduce";

const initialUsers = [
  {
    id: 1,
    username: "yonatan",
    password: "1234",
    email: "yonatan@gmail.com",
  },
];
const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const handlerAddUser = (user) => {
    let type = "addUser";
    if (user.id !== 0) {
      type = "updateUser";
    }
    console.log(user);
    dispatch({ type: type, payload: user });
  };

  const handlerRemoveUser = (id) => {
    console.log(id);
    dispatch({ type: "removeUser", payload: id });
  };

  const handlerUserSelectedForm = (user) => {
    console.log(user);
    setUserSelected(user);
  };
  return (
    <>
      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          <div className="col">
            <UserForm
              handlerAddUser={handlerAddUser}
              initialUserForm={initialUserForm}
              userSelected={userSelected}
            />
          </div>
          <div className="col">
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
