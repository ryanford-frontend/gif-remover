// ==UserScript==
// @name        Gif Remover for Gitter 
// @namespace   https://github.com/ryanford-frontend/gif-remover
// @description Remove gifs from Gitter
// @match       *.gitter.im/*
// @version     0.0.1
// @license     https://opensource.org/licenses/MIT
// ==/UserScript==

let imgs = [];

function findGifs() {
  imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (img.src.substr(-3) == "gif") {
      let parent = img.parentNode;
      parent.removeChild(img);
      parent.textContent = "Gif removed";
    }
  });
}

window.addEventListener("DOMNodeInserted", findGifs);
