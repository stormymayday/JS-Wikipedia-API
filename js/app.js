import getElement from "./utils/getElement.js";
import fetchPages from "./fetchPages.js";
import renderResults from "./renderResults.js";

const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = getElement('.form');
const formInput = getElement('.form-input');
const resultsDiv = getElement('.results');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const inputValue = formInput.value;

    // Checking if the inputValue is falsy
    if (!inputValue) {

        // Displaying the error message
        resultsDiv.innerHTML = `<div class="error">please enter valid search term</div>`;

        // Exiting the function
        return;

    } else {

        const list = await fetchPages(inputValue);

        // Checking if the list is empty
        if (list.length < 1) {

            // Displaying the error message
            resultsDiv.innerHTML = `<div class="error">There was an error</div>`;

            return;
        }

        renderResults(list);

    }

});