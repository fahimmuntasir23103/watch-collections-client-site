import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import homeImg from "../images/Banner1470x680-690x319.jpg"
import sectionImg from "../images/Banner1470x680-4-21oct21blog2-690x319.jpg"


const Home = () => {
    const [child, setChild] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/watch')
            .then(res => res.json())
            .then(data => setChild(data))
    }, [])
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <div className="container m-3">
                    {/* <h2>Home:{child.length}</h2> */}
                    <div className="home">
                        <div className="row">
                            {child?.map((childs) => (

                                <div className="col-lg-4 col-sm-12">
                                    <div  >
                                        <div >
                                            <img className="w-100" src={childs.img} alt="" />
                                        </div>
                                        <div className="text-area">
                                            <h4>{childs.name}</h4>
                                            <h6>{childs.desc}</h6>

                                            <Link to={`/cart/${childs._id}`}>
                                                <button className="btn btn-dark">PURCHASE NOW</button>
                                            </Link>

                                        </div>
                                    </div>

                                </div>
                            ))}

                            <div className="mt-5 col-lg-6">
                                <img className="img-fluid" src={sectionImg} alt="" />
                                <p>Longines, Omega, Panerai, Tissot, <br /> Watches  /  October 18, 2021</p>
                                <h6> Watch Out: All The Watches From <br /> The 2021 Met Gala Red Carpet</h6>
                                <p>The Met Gala is an event that is usually known for its slits and fits, but in today’s blog we will be discussing about<br /> Read More ➡ </p>
                            </div>
                            <div className="mt-5 col-lg-6">
                                <img className="img-fluid" src={homeImg} alt="" />
                                <p>Audemars Piguet, Patek Phillipe, <br /> Vacheron  /  October 12, 2021</p>
                                <h6> New Launch: Cartier’s First Ever <br /> Solar-Powered Watch, The Tank  Must SolarBeat</h6>
                                Cartier has been a total boss when it comes making <p> inspiring moves both on as well as off the field. One of the watchmaker’s <br /> Read More ➡ </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;