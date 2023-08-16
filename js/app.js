import getElement from "./utils/getElement.js";

const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = getElement('.form');
const formInput = getElement('.form-input');
console.log(formInput);