import * as sl from './selectOption.js';

export default function typeNewBtn(idBtn, content) {

  sl.newSelect(content, 
    'Choose button type:  ', 
    `selectType${idBtn}`);

  const selectType = document.querySelector(`#selectType${idBtn}`);

  sl.newOption(selectType, 'Default', 'Button'); // Option: Default 
  sl.newOption(selectType, 'Primary', 'Button Button--primary'); // Option: Primary 
  sl.newOption(selectType, 'Secondary', 'Button Button--secondary'); // Option: Seconday
  sl.newOption(selectType, 'Success', 'Button Button--success'); // Option: Success
  sl.newOption(selectType, 'Warning', 'Button Button--warning') // Option: Warning
  sl.newOption(selectType, 'Danger', 'Button Button--danger') // Option: Danger
  sl.newOption(selectType, 'Link', 'Button Button--link')  // Option: Link
  sl.newOption(selectType, 'Icon-action', 'Button Button--icon-action')  // Option: Icon-action

  selectType.addEventListener('input', function(event) {
    const selectSize = document.querySelector(`#selectSize${idBtn}`);
    document.querySelector(`#btn${idBtn}`).className = event.target.value + ' ' + selectSize.value;
  })

}