import { useReducer, useState } from "react";
import { usersReducer } from "../reducer/usersReduce";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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

export const useUserForm = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const handlerAddUser = (user) => {
    dispatch({ type: user.id !== 0?'updateUser':'addUser', payload: user });
    Swal.fire(
      user.id == 0 ? "Usuario Creado" : "Usuario Actualizado",
      user.id == 0
        ? "El usuario se ha creado correctamente"
        : "El usuario se ha actualizado correctamente",
      "success"
    );
    navigate("/users")
    handlerCloseForm()
  };

  const handlerRemoveUser = (id) => {
    console.log(id);
    dispatch({ type: "removeUser", payload: id });
    Swal.fire({
      title: "Estas seguro que desea eliminar el usuario?",
      text: "Cuando se elimine el usuario no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "removeUser", payload: id });
        Swal.fire({
          title: "El usuario se ha eliminado!",
          text: "El usuario se ha eliminado correctamente.",
          icon: "success"
        });
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    console.log(user);
    setVisibleForm(true);
    setUserSelected({...user});
  };

 const handlerOpenForm = () => {
    setVisibleForm(true);
  };  

 const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  };
  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm
  };
};
