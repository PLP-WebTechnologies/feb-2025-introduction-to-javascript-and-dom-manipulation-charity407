// Dynamically change text content
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been changed dynamically!';
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const styleElement = document.getElementById('dynamic-text');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '20px';
    styleElement.style.fontWeight = 'bold';
}

// Add a new element
function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    document.getElementById('container').appendChild(newElement);
}

// Remove an element
function removeElement() {
    const container = document.getElementById('container');
    const lastChild = container.lastElementChild;
    if (lastChild) {
        container.removeChild(lastChild);
    }
}

// Event listeners for buttons
document.getElementById('change-text-btn').addEventListener('click', changeText);
document.getElementById('change-style-btn').addEventListener('click', changeStyle);
document.getElementById('add-element-btn').addEventListener('click', addElement);
document.getElementById('remove-element-btn').addEventListener('click', removeElement);