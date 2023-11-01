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


const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-border');

const h1InsideDiv = document.createElement('h1');
h1InsideDiv.textContent = 'I\'m in the div!';

const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = 'ME TOO!';

// Appends <h1> and <p> to the <div> of pinkDiv
pinkDiv.appendChild(h1InsideDiv);
pinkDiv.appendChild(pInsideDiv);


// Appends elements to the container (which is a div)
container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(pinkDiv);

//or could do: 
// pinkDiv.append(h1InsideDiv, pInsideDiv); and
// container.append(content, redText, blueText, pinkDiv); to make it cleaner


