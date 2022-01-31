import React from 'react';
import './review.css'

const Review = () => {
          return (
                    <div className="row">
                              <h3>User Name:</h3>
                              <div class="w-50 mx-auto">
  <label for="" class="form-label">Feedback Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
  <button className="btn btn-primary">Submit</button>
</div>
 
                    </div>
          );
};

export default Review;