import { useReducer } from "react";
import { LoginReducer } from "../reducers/LoginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    isAuth: false,
    user: undefined,
  };

export const useAuth = () => {

  const [login, dispatch] = useReducer(LoginReducer, initialLogin);

  const handlerLogin = ({ username, password }) => {
    const isLogin = loginUser({ userLogin: { username, password } });
    if (isLogin) {
      Swal.fire("Success", "Login Success", "success");
      const user = {
        username: "admin",
      };
      dispatch({ type: "login", payload: user });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user: user,
        })
      );
    } else {
      Swal.fire("Error", "Username or Password invalid", "error");
    }
  };

  const handlerLogout = () => {
    dispatch({ type: "logout" });
    sessionStorage.removeItem("login");
  };


  return { login, handlerLogin, handlerLogout };

}