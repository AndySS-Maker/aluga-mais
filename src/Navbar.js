import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Aluga Mais
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/vehicle-list"
              >
                Todos Veículos
              </NavLink>              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/new-vehicle">
                Novo Veículo
              </NavLink>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;