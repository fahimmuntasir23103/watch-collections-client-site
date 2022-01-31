import React from 'react';
import {NavLink} from 'react-router-dom';

const Deshboard = () => {
          return (
                    <div className="row">
                        {/* <h1 className="btn-primary">ADMIN DESHBOARD</h1> */}
                           <div className="col-lg-2 col-12 btn btn-dark text-white">
                            <NavLink className="link nav-link"
                                to="/services"
                            >
                                Explore
                            </NavLink>

                            <NavLink className="link nav-link"
                                to="/payment"
                            >
                                Payment
                            </NavLink>
                            <NavLink className="link nav-link"
                                to="/myorders"
                            >
                                My Orders
                            </NavLink>
                       

                        
                            {/* <NavLink className="link nav-link"
                                to="/manageservice"
                            >
                                My Orders 
                            </NavLink> */}
                       

                       
                            <NavLink className="link nav-link"
                                to="/admin"
                            >
                             Admin
                            </NavLink>
                       
                     
                       
                       
                            <NavLink className="link nav-link"
                                to="/review"
                            >
                                Review
                            </NavLink>
                        

                        
                            <NavLink className="link nav-link"
                                to="/login"
                            >
                                Logout
                            </NavLink>
                            </div>
                            <div className="col-lg-10 col-12 btn- mt-5">
                          
                           <h1 className="btn btn-dark text-primary"> Welcome to your Dashboard</h1>
                           
                           <p>Here you will find all the activities of your Watch website.</p>
                           <p><b> WATCH </b>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory for men and women, <br /> and expensive watches are designed for this purpose. A watch may be one of the few accessories worn by a person.</p>

                       </div>
                    </div>
          );
};

export default Deshboard;