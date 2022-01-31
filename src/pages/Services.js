import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className="container m-5">
            {/* <h2>Home:{child.length}</h2> */}
            <div className="home">
                <div className="row">
                    {service?.map((childsSingle) => (

                        <div className="col-lg-3 col-sm-12">
                            <div >
                                <div  >
                                    <img className="w-100" src={childsSingle.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h3>{childsSingle.name}</h3>
                                    {/* <h4>{childsSingle.price}</h4> */}
                                    <h6> {childsSingle.desc}</h6>
                                    <Link to="/home">
                                        <button className="btn btn-secondary">Order Now

                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;