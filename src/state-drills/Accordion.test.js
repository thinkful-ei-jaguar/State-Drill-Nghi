// Import libraries
import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Import module/component
import Accordion from './Accordion';

describe('Smoke test', () => {
  it('renders without error', () => {
  	// Creates div element
  	const div = document.createElement('div');
  	// Renders Component in div
  	ReactDom.render(<Accordion />, div);
  	// Cleanup div
  	ReactDom.unmountComponentAtNode(div);
  })}
)

describe('Snapshot tests', () => {
  const data = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

  it('renders when prop is not supplied', () => {
  	// Shallow creates an instance for us to interact with and creates simulations
  	const wrapper = shallow(<Accordion />);
  	// Create JSON version of the wrapper and compare the UI elements before and after
  	expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders no sections as active by default', () => {
  	const wrapper = shallow(<Accordion sections={data} />);
  	expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('opens clicked section', () => {
  	const wrapper = shallow(<Accordion sections={data} />);
  	// Find the first button in the wrapper and mock a click
  	wrapper.find('button').at(0).simulate('click');
  	expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('opens last section when multiple sections have been clicked', () => {
  	const wrapper = shallow(<Accordion sections={data} />);
  	wrapper.find('button').at(0).simulate('click');
  	wrapper.find('button').at(1).simulate('click');
  	wrapper.find('button').at(2).simulate('click');
  	expect(toJson(wrapper)).toMatchSnapshot();
  })
})





