//  to manipulate DOM for html file
//
//

// container query
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

// button query
const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => { alert("Hello World"); });

// The arrow represents an arrow function, it's just a shorter way of writing in JavaScript
// it's essentially saying the following, re-written with a separate function
// the course says this is a better way to write it out if the function is something that would be used in multiple places
//
// let anonymous = function () {
//     alert("Hello World");
// }
// btn.addEventListener('click', anonymous) 




// btn.addEventListener('click', function (e) {            // console logs what was used to click the button (e.g., mouse pointer)
//     console.log(e);
// });


// btn.addEventListener('click', function (e) {            // console logs what exactly was pressed (e.g., the button)
//     console.log(e.target);
// });

// btn.addEventListener('click', function (e) {            // will apply a blue background to the clicked target (I guess useful for debugging?)
//     e.target.style.background = 'blue';
// });




// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});


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


