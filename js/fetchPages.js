import getElement from "./utils/getElement.js";

const resultsDiv = getElement('.results');

const fetchPages = async (searchValue) => {

    // Displaying the loading div
    resultsDiv.innerHTML = `<div class="loading"></div>`;

    try {

    } catch (error) {

        // Displaying the error message
        resultsDiv.innerHTML = `<div class="error">There was an error</div>`;

    }

};

export default fetchPages;