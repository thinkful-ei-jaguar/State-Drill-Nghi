import React from 'react';

class RouletteGun extends React.Component{
  // Default props
  static defaultProps = {
  	bulletInChamber: 8
  };

  state = {
  	chamber: null,
  	spinningTheChamber: false
  }

  spinning = () => {
  	this.setState({spinningTheChamber:true});

  	// Spin for 2 seconds to generate a number
	this.timeout = setTimeout(() => {
	  const randomChamber = Math.ceil(Math.random() * 8);
	  this.setState({
	 	  chamber: randomChamber,
	   	  spinningTheChamber: false	  	
	  })
	}, 2000);
  }

  showResult = () => {
  	if(this.state.spinningTheChamber) {
  		return 'spinning the chamber and pulling the trigger! ...';
  	}
  	else if(this.state.chamber === this.props.bulletInChamber) {
  		return 'BANG!!!!';
  	}
  	else {
  		return 'You\'re safe';
  	}
  }

  // Component has a default prop set to 8
  render() {
  	return(
  		<div>
  			<p>  			
			{this.showResult()}
			</p>
			<button onClick={this.spinning}>
			Pull the trigger!
			</button>
  		</div>
  	);
  }

  componentWillUnmount() {
  	clearInterval(this.timeout);
  }
}

export default RouletteGun;
