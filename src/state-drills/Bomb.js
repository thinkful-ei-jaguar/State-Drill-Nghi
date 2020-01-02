import React from 'react';


// Inside the div there should be a p that contains content of either "tick", "tock" or "BOOM!!!!".
class Bomb extends React.Component{
  state = {
  	count: 0,
  };

  // When component mount, increment count
  componentDidMount() {
  	// Add count every 3 seconds
  	this.interval = setInterval(() => {
  		this.setState({count: this.state.count+1});
  	}, 1000);
  }

  // When component unmount, clears interval
  componentWillUnmount() {
  	clearInterval(this.interval);
  }

  checkCount = () => {
  	if(this.state.count >= 8) {
  		clearInterval(this.interval);
  		return 'BOOM!!!!';
  	}
  	else if(this.state.count % 2) {
   		return 'tick';
  	}
  	else {
   		return 'tock';
   	}
  }

  render() {
	return (
		<div>
			<p>
			  {this.checkCount()}
			</p>
		</div>
		);
  }

}

export default Bomb;


// When the count is divisible by 2, display the word "tick".
// When the count isn't divisible by 2, display the word "tock".
// If the count goes equal to or above 8, display "BOOM!!!!".
// When the count goes above or equal to 8, also clear the interval!


