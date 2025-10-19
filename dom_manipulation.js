const a=document.querySelector("img");
a.setAttribute("src","https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000");
a.setAttribute("alt","Aesthetic Image");
console.log(a.getAttribute("src"));

const title=document.createElement("h1");
title.textContent="This is a new Title";
document.body.appendChild(title);