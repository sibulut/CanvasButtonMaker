import { header } from './header.js';
import { controlBox } from './controls.js';
import { outputBox  } from './output.js';    

// Content Box
const contentBox = document.createElement('div');
contentBox.setAttribute('class', 'content-box');

// Header
contentBox.appendChild(header);

// Controls
contentBox.appendChild(controlBox);

// Output
contentBox.appendChild(outputBox);

export { contentBox };