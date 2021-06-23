import * as sl from './selectOption.js';

export default function sizeNewBtn(idBtn, content) {
  sl.newSelect(content, 
    'Choose button size: ', 
    `selectSize${idBtn}`);

  const selectSize = document.querySelector(`#selectSize${idBtn}`);
    
  sl.newOption(selectSize, 'Default', '');  // Option: Default
  sl.newOption(selectSize, 'Large', 'Button--large'); // Option: Large
  sl.newOption(selectSize, 'Small', 'Button--small');  // Option: Small
  sl.newOption(selectSize, 'Mini', 'Button--mini'); 

  selectSize.addEventListener('input', function(event) {
    const selectType = document.querySelector(`#selectType${idBtn}`);
    document.querySelector(`#btn${idBtn}`).className = selectType.value + ' ' + event.target.value;
  })

}