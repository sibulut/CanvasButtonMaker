import { par } from './output.js';
import controlNewBtn from './clNewBtn.js'

// Function New Button
export default function newBtn() {
    const idBtn = par.childNodes.length;
      
    const btn = document.createElement('a');
    btn.setAttribute('id', `btn${idBtn + 1}`);
    btn.setAttribute('class', 'Button');
    btn.setAttribute('style', 'margin: 0 5px 5px 0;');
    
    const iconLeft = document.createElement('i');
    iconLeft.setAttribute('id', `iconLeft${idBtn + 1}`);
    iconLeft.setAttribute('style', 'font-style: normal; font-family: InstructureIcons-Line');
    btn.appendChild(iconLeft);
    
    const spanBtn = document.createElement('span');
    spanBtn.setAttribute('id', `txtSpanBtn${idBtn + 1}`);
    const txtBtn = document.createTextNode(`My button #${idBtn + 1} 😃`);
    spanBtn.appendChild(txtBtn);
    btn.appendChild(spanBtn);
    
    const iconRight = document.createElement('i');
    iconRight.setAttribute('id', `iconRight${idBtn + 1}`);
    iconRight.setAttribute('style', 'font-style: normal; font-family: InstructureIcons-Line');
    btn.appendChild(iconRight);
    
    par.appendChild(btn);
    
    controlNewBtn(idBtn + 1);
}