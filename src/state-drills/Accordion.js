import React from 'react';

class Accordion extends React.Component{
  // How data is passed via components
  static defaultProps = {
  	sections: []
  };
  // Use state to make data interative
  state = {
  	indexClicked: null
  };

  changeState = id => {
  	this.setState({
  	  indexClicked: id
  	});
  }
  
  // Cannot use arrow function because we want
  printSection(section, index, indexClicked) {
  	return (
  	  <li key={index}>
  		<button onClick={() => this.changeState(index)} >{section.title}
  	    </button>
  	    {indexClicked === index && <p>{section.content}</p>}
      </li>
  	);
  }

  render() {
  	return (
  	  <ul>
  	    // Printing new array of sections that also includes the element
  	    // Cannot print object if it's just this.props.sections
  	  	{this.props.sections.map((section, index) => 
  	  	this.printSection(section, index, this.state.indexClicked))}
  	  </ul>
  	);
  }


}

export default Accordion;

