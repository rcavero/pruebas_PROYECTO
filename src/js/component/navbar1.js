import React from "react";
import { Link } from "react-router-dom";

export const Navbar1 = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                    <button className="btn btn-success" type="submit">Menu</button>
                </form>
            </div>
        </nav>
    );
}