//Documentation for DOM manipulation functions
//every thing in html is a node
//node types: element node, text node, comment node, document node
//Element node: represents an element in the HTML document
// All types are part of the DOM (Document Object Model)

const title=document.getElementById('main-title');
console.dir(title);
console.log(title.id);
console.log(title.innerHTML);
const queryTitle=document.querySelector('#main-title');// select fist elemt with the id
console.log(queryTitle.innerHTML);
const queryall=document.querySelectorAll('#main-title');// select all elements with the id
console.log(queryall);//give all elements with the id in a node list in an array-like structure
title.innerText="New Title";//change the text of the title element
title.innerHTML="<em>New Title</em>";//change the text of the title element with html
console.log(title.innerText);
title.hidden=false;//hide the element


