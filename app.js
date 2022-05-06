import { cats } from './cats.js'; // import functions and grab DOM elements
import { renderCat } from './utils.js';
import { cow } from './cow.js';
import { renderCow } from './utils.js';

const catsDiv = document.getElementById('cats');
const cowsDiv = document.getElementById('cows');

// let state
for (let cat of cats) {
    catsDiv.append(renderCat(cat));
}

for (let cow of cows) {
    cowsDiv.append(renderCow(cow));
}
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
