import React, { Component } from 'react';
import {Link} from "react-router-dom" 
class MenuSuperior extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light">
                <Link className="navbar-brand" to="/">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Resumo <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/consultas">Consultas <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/faturamento">Faturamento <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default MenuSuperior;