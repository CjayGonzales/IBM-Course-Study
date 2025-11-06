
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      //handles logic for buttons increasing
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }))
      }
    }
    
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>
        I'm baby blog yr chicharrones, etsy banjo bruh roof party palo santo artisan direct trade raclette mixtape. 
        Man bun umami artisan lomo distillery tbh butcher freegan vibecession yuccie man braid austin master cleanse vape deep v. 
        Actually scenester cliche, flexitarian street art slow-carb normcore. 
        Hella VHS tilde, taxidermy tumblr meditation venmo chillwave slow-carb sustainable 8-bit celiac +1 neutral milk hotel cray.
      </p>
      <div className='rating-buttons'>
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
      </div>
      <div>
        <p>Total Ratings: ({this.state.totalRatings})</p>
      </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
