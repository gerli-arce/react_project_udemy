import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../../context/UserContext";
export const UserForm = ({
  userSelected,
  handlerCloseForm,
}) => {
  const {initialUserForm, handlerAddUser, errors} = useContext(UserContext);
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm(userSelected);
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // if (
    //   username.trim() === "" ||
    //   (!password && id == 0) ||
    //   email.trim() === ""
    // ) {
    //   Swal.fire({
    //     title: "Error de validación",
    //     text: "Todos los campos son requeridos!",
    //     icon: "question",
    //   });
    //   return;
    // }
    // if(!email.includes("@")){
    //   Swal.fire({
    //     title: "Error de validación",
    //     text: "El email debe contener un @!",
    //     icon: "question",
    //   });
    //   return;
    // }
    handlerAddUser(userForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          name="username"
          className="form-control my-3 w-75"
          onChange={onInputChange}
        />
        <p className="text-danger">{errors?.username}</p>
        {id !== 0 || (
          <input
            type="password"
            value={password}
            placeholder="Passsword"
            name="password"
            className="form-control my-3 w-75"
            onChange={onInputChange}
          />
        )}
        <p className="text-danger">{errors?.password}</p>

        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          className="form-control my-3 w-75"
          onChange={onInputChange}
        />
        <p className="text-danger">{errors?.email}</p>

        <input type="hidden" value={id} name="id" />
        <button type="submit" className="btn btn-primary w-75">
          {id === 0 ? "Add" : "Update"}
        </button>

        {!handlerCloseForm || (
          <button
            onClick={() => onCloseForm()}
            type="button"
            className="btn btn-primary mx-2"
          >
            Cerrar
          </button>
        )}
      </form>
    </>
  );
};
