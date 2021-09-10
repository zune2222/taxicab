import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png"
function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid fnt">
                <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                    <Link to="/" className="navbar-brand mx-3" style={{ cursor: 'pointer' }}>YATA</Link>
                    <Link to="/rank"><img src={logo} style={{width:"60px",height:"60px"}}></img></Link>
                </div>
            </div>
        </nav>
    );
}

export default Menu;