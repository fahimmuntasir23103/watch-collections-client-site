import React from 'react';
import {NavLink} from 'react-router-dom';

const Admin = () => {
          return (
                    <div className="row ">
                              <h1 className="btn btn-primary">ADMIN DESHBOARD</h1>
                             <div className="col-lg-12 col-12 btn btn-dark text-white mt-5">
                            <NavLink className="link nav-link"
                                to="/manageservice"
                            >
                                Manage-All-Orders
                            </NavLink>
                       

                             
                            <NavLink className="link nav-link"
                                to="/makeadmin"
                            >
                                Make Admin
                            </NavLink>
                       

                        
                            <NavLink className="link nav-link"

                                to="/booking"
                                // to="/login"
                            >
                            Add Service
                            </NavLink>
                       </div>
                    </div>
          );
};

export default Admin;