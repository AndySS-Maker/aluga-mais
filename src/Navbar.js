import { Link, NavLink } from "react-router-dom";
import "./style/main.scss"
import logo from "./img/logo-alugamais.png"

function Navbar() {
  return (
    <nav className=" navbar fixed-top navbar-expand-lg navbar-dark alpha shadow-sm">
      <div className="container  "> 

          <Link className="navbar-brand ms-5" to="/">
            <img src={logo} alt="logo" style={{width: "150px"}}  /> 
            <span style={{display: "none"}}>Aluga Mais</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto text-center me-5" >
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