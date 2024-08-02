import * as constants from "./constants.js";
import App from "./App.js";
console.log(constants);
const paper = document.querySelector("body");
paper.innerHTML += JSON.stringify(constants);
new App();
