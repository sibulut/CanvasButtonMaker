export default function weightIcon(details, idBtn) {
    const weightControl = document.createElement('fieldset');
    weightControl.setAttribute('class', 'ic-Fieldset ic-Fieldset--radio-checkbox');
    details.appendChild(weightControl);
    const legendWeightCl = document.createElement('legend');
    legendWeightCl.setAttribute('class', 'ic-Legend');
    legendWeightCl.append('Choose weight');
    weightControl.appendChild(legendWeightCl);
      
    const formControl = document.createElement('div');
    formControl.setAttribute('class', 'ic-Form-control ic-Form-control--radio');
    weightControl.appendChild(formControl);
      
    optionWeightIcon(formControl, idBtn, 'iconLine', 'Line', 'Line');
    optionWeightIcon(formControl, idBtn, 'iconSolid', 'Solid', 'Solid');
      
    document.querySelectorAll(`input[name='weightOption${idBtn}']`).forEach(function(input) {
        input.addEventListener('change', function(event){
            document.querySelector(`#iconLeft${idBtn}`).style.fontFamily = `InstructureIcons-${event.target.value}`;
            document.querySelector(`#iconRight${idBtn}`).style.fontFamily = `InstructureIcons-${event.target.value}`;
        })
    })
}
    
function optionWeightIcon(formControl, idBtn, id, name, value) {
    const weightOption = document.createElement('div');
    weightOption.setAttribute('class', 'ic-Radio');
    formControl.appendChild(weightOption);
      
    const inputOption = document.createElement('input');
    inputOption.setAttribute('id', id + idBtn);
    inputOption.setAttribute('type', 'radio');
    inputOption.setAttribute('value', value);
    inputOption.setAttribute('name', `weightOption${idBtn}`);
    weightOption.appendChild(inputOption);
      
    const labelInputOption = document.createElement('label');
    labelInputOption.setAttribute('for', id + idBtn);
    labelInputOption.setAttribute('class', 'ic-Label');
    labelInputOption.append(name)
    weightOption.appendChild(labelInputOption);
      
    if (id == 'iconLine') {
        inputOption.setAttribute('checked', 'true');
    }
}