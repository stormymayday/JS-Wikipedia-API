import getElement from "./utils/getElement.js";

const resultsDiv = getElement('.results');

const renderResults = (list) => {

    const cardsList = list.map((item) => {

        const { title, snippet, pageid } = item;

        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">

                    <h4>${title}</h4>
                    <p>${snippet}</p>

                </a>`;

    }).join('');

    resultsDiv.innerHTML = `<!-- '.articles' - start -->
            <div class="articles">

                ${cardsList}

            </div>
            <!-- '.articles' - end -->`;

};

export default renderResults;