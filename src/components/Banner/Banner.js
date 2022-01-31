import React from 'react';
import bgImg from "../../images/top-Banner1470x680-4nov21-690x319 (1).jpg"
import './Banner.css'
import {NavLink,Link} from 'react-router-dom';




const Banner = () => {
          return (
                    <div className="row">
                              <div className="col-lg-12 col-sm-12">
                              <img className="" src={bgImg} alt="" />

          
                              <h1 className="about">WATCH-COLLECTION</h1>
                              <h6 className="paragraph">A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory for men and women, and expensive watches are designed for this purpose. A watch may be one of the few accessories worn by a person.</h6> <br />
                              <Link to="/login">
                              <h1 className="btn btn-dark"> Read More ➡ </h1>
                              </Link>
                              </div>
                             
                    </div>
                  
          );
};

export default Banner;