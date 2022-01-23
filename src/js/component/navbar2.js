import React from "react";
import { Link } from "react-router-dom";

export const Navbar2 = () => {
    return (
        <div className="containter fluid">
            <nav className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Nomad Vanlife</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="#menuNavegacion" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item"><a className="nav-link" href="#">Calendario</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Diario</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Ruta</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Mapa
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Vista Mapa</a></li>
                                    <li><a className="dropdown-item" href="#">Vista Tarjetas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}