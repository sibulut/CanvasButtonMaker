import * as sl from './selectOption.js'
import iconsList from './iconsList.js'
import weightIcon from './weightIcon.js';

export default function addIcon(idBtn, details) {
  const controlIcons = document.createElement('details');
  controlIcons.setAttribute('class', 'pad-box-mini');
    
  const summary = document.createElement('summary');
  const txtSummary = document.createTextNode('Insert icon');
  summary.setAttribute('class', 'text-info');
  summary.appendChild(txtSummary);
  controlIcons.appendChild(summary);
  details.appendChild(controlIcons);
    
  sl.newSelect(controlIcons, 
    'Choose left icon: ',
    `selectIconLeft${idBtn}`) 
      
  const selectIconLeft = document.querySelector(`#selectIconLeft${idBtn}`);

  iconsList(selectIconLeft);
    
  selectIconLeft.addEventListener('input', function(event) {
    document.querySelector(`#iconLeft${idBtn}`).innerHTML = event.target.value + ' ';
  })

  sl.newSelect(controlIcons, 
    'Choose right icon : ',
    `selectIconRight${idBtn}`)   
  
  const selectIconRight = document.querySelector(`#selectIconRight${idBtn}`);  
    
  iconsList(selectIconRight);
    
  selectIconRight.addEventListener('input', function(event) {
    document.querySelector(`#iconRight${idBtn}`).innerHTML = ' ' + event.target.value;
  })
    
  weightIcon(controlIcons, idBtn);
}