import { par } from './output.js'

export default function codeCopied() {
  const buttons = document.querySelectorAll("a[class]");
  const spans = document.querySelectorAll("span");
  const code = document.createElement('p');
  code.setAttribute('class', par.className)
  buttons.forEach(function(button){
    const buttonCopied = document.createElement('a');
    buttonCopied.setAttribute('class', button.className);
    buttonCopied.setAttribute('class', button.className);
    spans.forEach(function(span){
      buttonCopied.setAttribute('style', `margin: ${button.style.margin};`)
    })
    buttonCopied.innerHTML = button.innerHTML;
    code.appendChild(buttonCopied);
  })
  
  const codeOutput = document.createElement('div');
  codeOutput.appendChild(code);
  
  return codeOutput.innerHTML;
}