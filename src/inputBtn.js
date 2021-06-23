export default function textNewBtn(idBtn, details) {
    const labelInputTxt = document.createElement('label');
    const txtLabelInputTxt = document.createTextNode('Insert text: ')
    labelInputTxt.setAttribute('class', 'ic-Label');
    labelInputTxt.setAttribute('for', `txtBtn${idBtn}`);
    labelInputTxt.appendChild(txtLabelInputTxt);
    details.appendChild(labelInputTxt);
    
    const inputTxt = document.createElement('input');
    inputTxt.setAttribute('id', `txtBtn${idBtn}`);
    inputTxt.setAttribute('type', 'text');
    inputTxt.setAttribute('placeholder', `My button #${idBtn} 😃`)
    labelInputTxt.appendChild(inputTxt);
    
    const listEmoji = document.createElement('a');
    listEmoji.setAttribute('href', 'https://emojipedia.org/');
    listEmoji.setAttribute('target', '_blank');
    listEmoji.append(' List of emojis');
    labelInputTxt.appendChild(listEmoji);
    
    inputTxt.addEventListener('input', function(event) {
      document.querySelector(`#txtSpanBtn${idBtn}`).innerHTML = event.target.value;
    })
}