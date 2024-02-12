export const Navbar = ({ login, handlerLogout }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          
          <div className="justifi-content-end" id="navbarNav">
            <span className="nav-item nav-link text-primary mx-3">
              {login.user.username}
            </span>
            <button onClick={handlerLogout} className="btn btn-outline-success">Logout</button>
          </div>
        </div>
      </nav>
    </>
  );
};
