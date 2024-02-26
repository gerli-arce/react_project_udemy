import { useReducer, useState } from "react";
import { usersReducer } from "../reducer/usersReduce";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];
const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
const initialErrors = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
export const useUserForm = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await findAll();
    console.log(result);
    dispatch({ type: "loadingUsers", payload: result.data });
  };

  const handlerAddUser = async (user) => {
    let response;

    try {
      if (user.id === 0) {
        response = await save(user);
      } else {
        response = await update(user);
      }

      dispatch({
        type: user.id !== 0 ? "updateUser" : "addUser",
        payload: response.data,
      });
      Swal.fire(
        user.id == 0 ? "Usuario Creado" : "Usuario Actualizado",
        user.id == 0
          ? "El usuario se ha creado correctamente"
          : "El usuario se ha actualizado correctamente",
        "success"
      );
      handlerCloseForm();
      navigate("/users");
    } catch (error) {
      if(error.response && error.response.status === 400){
        setErrors(error.response.data);
        console.log(error.response.data);
      } else if(error.response && error.response.status == 500 && error.response.data?.message?.includes("constraint")) {
        if(error.response.data?.message?.includes("UK_username")){
          setErrors({username: "El nombre de usuario ya existe"})
        }
        if(error.response.data?.message?.includes("UK_email")){
          setErrors({username: "El email ya existe"})
        }
      }
      else{
        throw error;
      }
    }
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
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
        dispatch({ type: "removeUser", payload: id });
        Swal.fire({
          title: "El usuario se ha eliminado!",
          text: "El usuario se ha eliminado correctamente.",
          icon: "success",
        });
      }
    });
  };

  const handlerUserSelectedForm = (user) => {
    console.log(user);
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
    setErrors({})
  };
  return {
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
  };
};
