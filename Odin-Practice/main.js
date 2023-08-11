// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey I’m red!';
redParagraph.setAttribute('style', 'color: red;');
container.appendChild(redParagraph);

const blueHead = document.createElement('h3');
blueHead.textContent = 'I’m a blue h3!';
blueHead.setAttribute('style', 'color: blue;');
container.appendChild(blueHead);

const divDaddy = document.createElement('div');
divDaddy.setAttribute('style', 'border: black; background: pink;');

const hKid = document.createElement('h1');
hKid.textContent = 'I’m in a div';
divDaddy.appendChild(hKid);

const pKid = document.createElement('p');
pKid.textContent = 'ME TOO!';
divDaddy.appendChild(pKid);

container.appendChild(divDaddy);

