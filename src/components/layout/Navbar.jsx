import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

  const { login, handlerLogout } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>

          <div className="collapse navbar-collapse show" id="navbarNav1">
            <ul className="navbar-nav">
              <li>
                <NavLink className="nav-item" to="/users">
                  Usuarios
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/users/register">
                  Registrar Usuarios
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="justifi-content-end" id="navbarNav">
            <span className="nav-item nav-link text-primary mx-3">
              {login.user.username}
            </span>
            <button onClick={handlerLogout} className="btn btn-outline-success">
              Logout
            </button>
          </div>
        </div>
      </nav>
      {/* 
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          
          <div className="collapse navbar-collapse show" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};
