import React, { useState, useEffect } from 'react';

const ManageService = () => {
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
                                                  alert('are you sure delete?')
                                                  const remaining = bookings.filter(cart => cart._id !== id);
                                                  setBookings(remaining);
                                        }
                              })
          }

          return (
                    <div>
                              <h1>Manage All Orders</h1>
                              {
                                        bookings?.map(cart => <div key={cart._id}
                                        >
                                                  <h3>{cart.name}</h3>
                                                  <button onClick={() => handleDelete(cart._id)}>Delete</button>
                                        </div>)
                              }
                    </div>
          );
};

export default ManageService;