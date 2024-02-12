export const Navbar = ({ handlerLogout }) => {
  return (
    <>
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="#">
          Users App
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a>
      </nav>
    </>
  );
};
