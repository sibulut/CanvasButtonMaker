import { controlBox } from './controls.js'
import textNewBtn from './inputBtn.js'
import typeNewBtn from './typeBtn.js'
import sizeNewBtn from './sizeBtn.js'
import addIcon from './iconBtn.js'
import deleteBtn from './deleteBtn.js'

// Function cl new btn
export default function controlNewBtn(idBtn) {
    const details = document.createElement('details');
    details.setAttribute('id', `controlBtn${idBtn}`);
    details.setAttribute('class', 'pad-box-mini border border-b');
    controlBox.appendChild(details);
    
    const summary = document.createElement('summary');
    const txtSummary = document.createTextNode(`My button #${idBtn}`);
    summary.setAttribute('class', 'text-info');
    summary.appendChild(txtSummary);
    details.appendChild(summary);
    
    textNewBtn(idBtn, details);
    typeNewBtn(idBtn, details);
    sizeNewBtn(idBtn, details);
    addIcon(idBtn, details);
    deleteBtn(idBtn, details)
}