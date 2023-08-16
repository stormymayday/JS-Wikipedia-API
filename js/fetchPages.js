import getElement from "./utils/getElement.js";

const resultsDiv = getElement('.results');

const fetchPages = async (searchValue) => {

    // Displaying the loading div
    resultsDiv.innerHTML = `<div class="loading"></div>`;

    try {

    } catch (error) {

    }

};

export default fetchPages;