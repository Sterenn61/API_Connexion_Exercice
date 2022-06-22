const queryString = window.location.search;
console.log(queryString);
//Parser infos : https://www.sitepoint.com/get-url-parameters-with-javascript/
const urlParams = new URLSearchParams(queryString);

const name = urlParams.get('name')
    document.getElementById("name").innerHTML = name
//console.log(document.getElementById("name"))
const type = urlParams.get('type')
    document.getElementById("type").innerHTML = type
console.log(document.getElementById("type"))  
const image = urlParams.get('image')
    document.createElement("img")