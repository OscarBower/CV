const counter = document.querySelector('#counter');
const counterButton = document.querySelector('#counterButton');
const colourBox = document.querySelector("#colourBox");
const colourButton = document.querySelector("#colourButton");

const colourClasses = ['redBox', 'greenBox', 'blueBox'];

counterButton.onclick = () => {
    const initial = Number(counter.innerHTML);
    const result = initial + 1;
    counter.innerHTML = result;
}

colourButton.onclick = () => {
    const classList = colourBox.classList;
    let colourClass;
    classList.forEach((x) => {
        if(colourClasses.includes(x)) {
            colourClass = x;
        }
    });
    const colourClassesSize = colourClasses.length;
    const newColourClass = colourClasses.filter((value, key, obj) => {
        const previousKey = (key - 1 + colourClassesSize) % colourClassesSize;
        const previousValue = obj[previousKey]
        return previousValue === colourClass
    })[0];
    classList.replace(colourClass, newColourClass)
}

