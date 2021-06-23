import { selectAlign } from './controls.js'

// Output
const outputBox = document.createElement('section');
outputBox.setAttribute('class', 'pad-box border border-b');

// Header output
const headerOutput = document.createElement('h3');
const txtHeaderOutput = document.createTextNode('Outcome');
headerOutput.setAttribute('class', 'text-info')
headerOutput.appendChild(txtHeaderOutput);
outputBox.appendChild(headerOutput);

// Cuerpo output
const contentOutput = document.createElement('div');
contentOutput.setAttribute('class', 'content-box');
outputBox.appendChild(contentOutput);

// Lista de botones
const par = document.createElement('p');
par.setAttribute('class', `${selectAlign.value}`);
par.setAttribute('style', 'padding: 0px;');
contentOutput.appendChild(par);

export { outputBox, par };