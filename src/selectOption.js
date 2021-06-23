function newSelect(content, selectLabel, selectId) {
    const label = document.createElement('label');
    label.append(selectLabel);
    label.setAttribute('class', 'ic-Label');
    label.setAttribute('for', selectId);
    content.appendChild(label);
    const select = document.createElement('select');
    select.setAttribute('id', selectId);
    content.appendChild(select);
}

function newOption(select, optionName, value) {
    const option = document.createElement('option');
    option.append(optionName); 
    option.setAttribute('value', value);
    select.appendChild(option);
}

export { newSelect, newOption }