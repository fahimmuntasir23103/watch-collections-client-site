import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Img from "../images/about.jfif"


const About = () => {
    return (
        <div className="container m-5">
            <div className="row">
              
                <div className="col-lg-6 about-left col-md-6">
                    <img src={Img} alt="" />
                   <p><b> WATCH </b>A watch is a small clock carried or worn by a person. It makes it easy to see the time. It is also a fashion accessory for men and women, <br /> and expensive watches are designed for this purpose. A watch may be one of the few accessories worn by a person.</p>
                </div>
                <div className="col-lg-6 about-right col-md-6">
                    <div>
                        <p> <b>THE BEST WATCH COLLECTIONS
                     </b> </p>
                        <ProgressBar animated now={95} />
                    </div>
                    <div>
                        <p> <b>ROLEX BRAND WATCH</b> </p>
                        <ProgressBar animated now={80} />
                    </div>
                    <div>
                        <p> <b>WATCH SERVICES</b> </p>
                        <ProgressBar animated now={70} />
                    </div>
                    <div>
                    <p> <b>TIME&LIFE</b> </p>
                        <ProgressBar animated now={65} />
                    </div>
                    <div>
                        <p> <b>SEE TIME</b> </p>
                        <ProgressBar animated now={60} />
                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;