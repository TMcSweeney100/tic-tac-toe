import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Creater from './creater';
import "./navbar.css"
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navigation"
        >
          <span className=""></span>
        </button>
        <div className="" id="main-navigation">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Tic-Tac-Toe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/creater">Creater</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">Fill in the form</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

