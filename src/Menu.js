import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink} from 'react-router-dom';
import "./index.css"



const Menu =()=>{
    return(
        <>
           <div className="container-fluid">
           <div className="row">
                   
                   <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand nav-head p-1" to="/"><u>Abdul Aabid Khan</u></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse p-1" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 p-1">
                                <li className="nav-item">
                                <NavLink activeClassName="menu_main" exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_main" exact className="nav-link" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeClassName="menu_main" exact className="nav-link" to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink  activeClassName="menu_main" exact className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                            
                            </ul>
                            
                            </div>
                        </div>
                        </nav>
                   </div>
                   </div>
          
        
        </>
    )
}
export default Menu;
