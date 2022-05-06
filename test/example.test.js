// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { cats } from "../cats.js";
import { renderCat } from "../utils.js";
import { cow } from "../cow.js";
import { renderCow } from "../utils.js";
import { animals } from "../animals.js";
import { renderAnimal } from "../utils.js";

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test cat render function', (expect) => {
    const expected = `<div class="cat"><h1>aby</h1><img src="aby"><p>$(cat.name) is 3</p></div>`;
    const actual = renderCat(cats[0]);
    expect.equal(actual.outerHTML, expected);
});

test('test cow render function', (expect) => { 
    const expected = `<div class="cow"><h1>maggie</h1><img src="maggie"><p>$(cow.name) is 1</p></div>`;
    const actual = renderCow(cow[0]);
    expect.equal(actual.outerHTML, expected);

});

test('test animal render function', (expect) => {
    const expected = '';
    const actual = renderAnimal(animals[0]);
    expect.deepEqual(actual.outerHTML, expected);
});
