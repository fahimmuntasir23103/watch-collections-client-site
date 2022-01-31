import React, { useState, useEffect } from 'react';

const Myorders = () => {
          const [bookings, setBookings] = useState([]);
          useEffect(() => {
                    fetch('http://localhost:5000/watch/')
                              .then(res => res.json())
                              .then(data => setBookings(data))
          }, []);
          const handleDelete = id => {
                    const url = `http://localhost:5000/watch/${id}`;
                    fetch(url, {
                              method: 'DELETE'
                    })
                              .then(res => res.json())
                              .then(data => {
                                        console.log(data);
                                        if (data.deletedCount) {
                                                  alert('are you ready to cancel?')
                                                  const remaining = bookings.filter(cart => cart._id !== id);
                                                  setBookings(remaining);
                                        }
                              })
          }

          return (
                    <div>
                              <h1 className="btn btn-secondary">ALL YOUR ORDERS DETAILS..</h1>
                              {
                                        bookings?.map(cart => <div className="bg-info" key={cart._id} 
                                        >
                                                  
                                                 
                                                 
                                                  <h3>{cart.email}</h3>
                                                  <h3>{cart.name}</h3>
                                                  <h3>{cart.price}</h3>
                                                  <button className="btn-warning" onClick={() => handleDelete(cart._id)}>Cancel</button>
                                        </div>)
                              }
                    </div>
          );
};

export default Myorders;