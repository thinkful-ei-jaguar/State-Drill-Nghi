// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import components
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';
import {data} from './state-drills/data';

ReactDOM.render(<Accordion sections={data}/>, document.getElementById('root'));