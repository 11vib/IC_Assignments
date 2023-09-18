import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-center" id="bimg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Navbar
                    </Link>
                    <div>
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="btn btn-light mx-1" to="/Login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-light mx-1" to="/SignUp">
                                    SignUp
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;