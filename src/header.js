// Header
const header = document.createElement('header');
header.setAttribute('class', 'pad-box border border-trbl')

// Title
const title = document.createElement('h1');
const txtTitle = document.createTextNode('The Butt🔘n Maker');
title.setAttribute('class', 'text-info');
title.setAttribute('style', 'font-variant: small-caps');
title.appendChild(txtTitle);
header.appendChild(title);

// Subtítulo
const subtitle = document.createElement('h3');
const txtSubtitle = document.createTextNode('Button generator for Canvas LMS');
subtitle.setAttribute('class', 'muted');
subtitle.appendChild(txtSubtitle);
header.appendChild(subtitle);

export { header };