import { contentBox }  from './content.js';
import * as cl from './controls.js'
import newBtn from './newBtn.js';
import { par } from './output.js'
import codeCopied from './codeCopy.js';

const app = document.querySelector('#app');
app.appendChild(contentBox);

cl.selectAlign.addEventListener('input', function(event) {
    par.className = event.target.value;
})

cl.btnNewBtn.addEventListener('click', newBtn);

cl.btnCode.addEventListener('click', async event => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return
    }
    const code = codeCopied();
    try {
      await navigator.clipboard.writeText(code)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
})