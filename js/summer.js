function kitchenWareOne() {
    const itemOne = accessoriesQuantity('item-one');
    setElementInnerText(itemOne);
}
function kitchenWareTwo() {
    const itemTwo = accessoriesQuantity('item-two');
    setElementInnerText(itemTwo);
}
function kitchenWareThree() {
    const itemThree = accessoriesQuantity('item-three');
    setElementInnerText(itemThree);
}
function kitchenWareFour() {
    const itemFour = accessoriesQuantity('item-four');
    setElementInnerText(itemFour);
}
function kitchenWareFive() {
    const itemFive = accessoriesQuantity('item-five');
    setElementInnerText(itemFive);
}
function kitchenWareSix() {
    const itemSix = accessoriesQuantity('item-six');
    setElementInnerText(itemSix);
}

function accessoriesQuantity(price) {
    const id = document.getElementById(price);
    const innerText = id.innerText;
    return innerText;
}

function setElementInnerText(elementId) {
    const element = document.getElementById('items-entry');
    const count = element.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${elementId}`;
    element.appendChild(p);
}