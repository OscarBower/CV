const counter = document.querySelector('#counter');
const button = document.querySelector('#button');

button.onclick = () => {
    const initial = Number(counter.innerHTML);
    const result = initial + 1;
    counter.innerHTML = result;
}

