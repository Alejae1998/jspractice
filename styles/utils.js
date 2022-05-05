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
