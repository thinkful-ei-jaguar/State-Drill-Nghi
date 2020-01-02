import React from 'react';



class HelloWorld extends React.Component{
	state = {
		who: 'world'
	};

	updatePerson = (person) => {
		// State is updated using setState()
		this.setState({who: person});
	};

	render() {
		return (
			<div>
				<p>
					Hello, {this.state.who}!
				</p>
				<button onClick={() => this.updatePerson('World')}>Say hi to world</button>
				<button onClick={() => this.updatePerson('Friend')}>Say hi to friend</button>
				<button onClick={() => this.updatePerson('React')}>Say hi to react</button>
			</div>
			);
	}
}




export default HelloWorld;