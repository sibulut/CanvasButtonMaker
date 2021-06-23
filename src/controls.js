// Controls
const controlBox = document.createElement('section');
controlBox.setAttribute('class', 'pad-box border border-b');

// Header Controls
const headerClBox = document.createElement('h3');
const txtHeaderClBox = document.createTextNode('Options');
headerClBox.setAttribute('class', 'text-info');
headerClBox.appendChild(txtHeaderClBox);
controlBox.appendChild(headerClBox);

// Button New Button
const btnNewBtn = document.createElement('button');
const txtBtnNewBtn = document.createTextNode('Insert button');
btnNewBtn.setAttribute('class', 'Button Button--primary')
btnNewBtn.appendChild(txtBtnNewBtn);
controlBox.appendChild(btnNewBtn);
controlBox.append(' ');

// Button Copy Code
const btnCode = document.createElement('button');
const txtBtnCode = document.createTextNode('Copy code');
btnCode.setAttribute('id', 'copiarCodigo');
btnCode.setAttribute('class', 'Button Button');
btnCode.appendChild(txtBtnCode);
controlBox.appendChild(btnCode);
controlBox.append(document.createElement('br'));
controlBox.append(document.createElement('br'));

// Select align
const labelAlign = document.createElement('label');
const txtLabelAlign = document.createTextNode('Choose alignment: ')
labelAlign.setAttribute('class', 'ic-Label');
labelAlign.setAttribute('for', 'selectAlign');
labelAlign.appendChild(txtLabelAlign);
controlBox.appendChild(labelAlign);
  
const selectAlign = document.createElement('select');
selectAlign.setAttribute('id', 'selectAlign');
labelAlign.appendChild(selectAlign);
  
// Align: left
const btnLeft = document.createElement('option');
const txtBtnLeft = document.createTextNode('Left');
btnLeft.setAttribute('value', 'text-left');
btnLeft.appendChild(txtBtnLeft);
selectAlign.appendChild(btnLeft);
  
// Align: center
const btnCenter = document.createElement('option');
const txtBtnCenter = document.createTextNode('Center');
btnCenter.setAttribute('value', 'text-center');
btnCenter.appendChild(txtBtnCenter);
selectAlign.appendChild(btnCenter);
  
// Align: right
const btnRight = document.createElement('option');
const txtBtnRight = document.createTextNode('Right');
btnRight.setAttribute('value', 'text-right');
btnRight.appendChild(txtBtnRight);
selectAlign.appendChild(btnRight);

export { controlBox, btnNewBtn, btnCode, selectAlign }; 