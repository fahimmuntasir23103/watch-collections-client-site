import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {NavLink} from 'react-router-dom';

const Navber = () => {
  const { user, logOut } = useAuth();
    console.log(user)
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fs-6 fw-bold">
            <div class="container-fluid">
                <a class="navbar-brand nav-bar fs-3" href="/home">WATCH <span className="text-secondary">COLLECTION</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                        <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/services"
                            >
                                Explore-Iteam
                            </NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/deshboard"
                            >
                                Deshboard
                            </NavLink>
                        </li>
                        

                        {/* <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/myorders"
                            >
                                My-orders
                            </NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/manageservice"
                            >
                                Manage-All-Orders
                            </NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink className="link nav-link"

                                to="/booking"
                                // to="/login"
                            >
                            Add Service
                            </NavLink>
                        </li> */}
                       
                        <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/about"
                            >
                                About Us
                            </NavLink>
                        </li>
                        {/* <li class="nav-item">
                            <NavLink className="link nav-link"
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li> */}
                       
                    </ul>
                    <form class="d-flex">
                        <span className=" me-3 mt-2">{user?.displayName}</span>
                        {user?.displayName ?
                            <button onClick={logOut} className="btn btn-danger fw-bold me-2">Logout</button> :
                            <NavLink to="/login"><button className="btn btn-warning fw-bold me-2">Login</button></NavLink>}
                    </form>
                </div>
            </div>
        </nav>
    </div>
);
};

export default Navber;