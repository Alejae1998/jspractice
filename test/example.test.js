// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { cats } from '../cats.js';
import { renderCat } from '../utils.js';
import { cow } from '../cow.js';
import { renderCow } from '../utils.js';
import { animals } from '../animals.js';
import { renderAnimal } from '../utils.js';


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
    const expected = `<div class="cat"><h1>../assets/aby.webp</h1><img src="../assets/aby.webp"><p>$(cat.name) is 3</p></div>`;
    const actual = renderCat(cats[0]);
    expect.equal(actual.outerHTML, expected);
});

test('test cow render function', (expect) => {
    const expected = `<div class="cow"><h1>../assets/maggie.webp</h1><img src="../assets/maggie.webp"><p>$(cow.name) is 1</p></div>`;
    const actual = renderCow(cow[0]);
    expect.equal(actual.outerHTML, expected);
});

test('test animal render function', (expect) => {
    const expected = '<div class="animal"><ul><li>[object Object]</li><li>[object Object]</li><li>[object Object]</li></ul></div>';
    const actual = renderAnimal(animals);
    expect.equal(actual.outerHTML, expected);
});
