import { useEffect, useState } from "react";
export const UserForm = ({userSelected, handlerAddUser, initialUserForm}) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const {id, username, password, email } = userForm;

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
    if (
      username.trim() === "" ||
      (!password && id ==0) ||
      email.trim() === ""
    ) {
      return;
    }
    handlerAddUser(userForm)
    console.log("submit", userForm);
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
        {id !== 0  || ( <input
          type="password"
          value={password}
          placeholder="Passsword"
          name="password"
          className="form-control my-3 w-75"
          onChange={onInputChange}
        />)}
       
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          className="form-control my-3 w-75"
          onChange={onInputChange}
        />
        <input type="hidden" value={id} name="id" />
        <button type="submit" className="btn btn-primary w-75">
          {id === 0 ? "Add" : "Update"}
        </button>
      </form>
    </>
  );
};
