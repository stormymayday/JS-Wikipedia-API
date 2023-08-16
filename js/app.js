import getElement from "./utils/getElement.js";

const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = getElement('.form');
const formInput = getElement('.form-input');
const resultsDiv = getElement('.results');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const inputValue = formInput.value;

    // Checking if the inputValue is falsy
    if (!inputValue) {

        // Displaying the error message
        resultsDiv.innerHTML = `<div class="error">please enter valid search term</div>`;

        // Exiting the function
        return;

    }

});