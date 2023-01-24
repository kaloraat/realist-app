import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <nav className="nav d-flex justify-content-between lead">
      <NavLink className="nav-link" aria-current="page" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>

      <div className="dropdown">
        <li>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            User
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <a className="nav-link">Logout</a>
            </li>
          </ul>
        </li>
      </div>
    </nav>
  );
}
