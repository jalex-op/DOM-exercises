//  to manipulate DOM for html file
//
//


const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redText = document.createElement('p');
redText.textContent = 'Hey I\'m red!';
redText.classList.add('red-text');

const blueText = document.createElement('h3');
blueText.textContent = 'I\'m a blue h3!';
blueText.classList.add('blue-text');


// const subcontent = document.createElement('div');
// subcontent.classList.add('subcontent');
// content.



container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);


//or could do container.append(content, redText) to make it cleaner


