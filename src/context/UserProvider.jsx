import { useUserForm } from "../hooks/useUser";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers,
  } = useUserForm();

  return (
    <UserContext.Provider
      value={{
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
