import { animals } from './animals';

export function renderCat(cat) {
    const div = document.createElement('div');
    div.classList.add('cat');
    const h1 = document.createElement('h1');
    h1.textContent = cat.name;
    const img = document.createElement('img');
    img.src = cat.name;
    const p = document.createElement('p');
    p.textContent = `$(cat.name) is ${cat.age}`;
    div.append(h1, img, p);
    return div;
}

export function renderCow(cow) {
    const div = document.createElement('div');
    div.classList.add('cow');
    const h1 = document.createElement('h1');
    h1.textContent = cow.name;
    const img = document.createElement('img');
    img.src = cow.name;
    const p = document.createElement('p');
    p.textContent = `$(cow.name) is ${cow.age}`;
    div.append(h1, img, p);
    return div;
}

export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    const ul = document.createElement('ul');
    for (let animal of animals) {
        const li = document.createElement('li');
        li.textContent = animal;
        ul.append(li);
    }
    div.append(ul);
    return div;
}
