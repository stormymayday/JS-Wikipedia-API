import getElement from "./utils/getElement.js";

const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const resultsDiv = getElement('.results');

const fetchPages = async (searchValue) => {

    // Displaying the loading div
    resultsDiv.innerHTML = `<div class="loading"></div>`;

    try {

        const response = await fetch(`${url}${searchValue}`);

        const data = await response.json();

        return data;

    } catch (error) {

        // Displaying the error message
        resultsDiv.innerHTML = `<div class="error">There was an error</div>`;

    }

};

export default fetchPages;