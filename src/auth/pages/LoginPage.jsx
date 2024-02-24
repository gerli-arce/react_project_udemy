import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const {handlerLogin} = useContext(AuthContext);
   const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;
  const onInputChange = ({target: {name, value}}) => {
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(!username || !password){
      Swal.fire('Error', 'Username and Passwor id required', 'error')
      return
    }
  
    handlerLogin ({username, password})

    
    setLoginForm(initialLoginForm)
  };
  return (
    <>
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="" onSubmit={onSubmit}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control my-3 w-75"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
                <input
                  type="password"
                  className="form-control my-3 w-75"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onInputChange}

                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
