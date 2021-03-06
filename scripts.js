function ShowPage(page) {
    fetch('https://rickandmortyapi.com/api/character?page='+page)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.info)
        const characters = data.results
        characters.forEach(function (character) {
            const data = Reload(character)
            console.log(data)
            document.getElementById("myTable").appendChild(data)
        })
        document.getElementById("prev").href = "?page=" + (parseInt(page)-1)
        document.getElementById("current").innerHTML = page
        document.getElementById("next").href = (parseInt(page)+1)
    })
    .catch(function (err) {
        console.log(err);
    });
}

function Reload(person)   {

    
    let node = document.createElement('tr');
    const td_name = document.createElement('td');
    td_name.innerHTML = person.name;


    const td_status = document.createElement('td');
   //td_status.innerHTML = person.status;
    const i = document.createElement('i');
    if (person.status == 'alive') {
        i.className="alive";
    } else {
        i.className="dead";
    }
    td_status.appendChild(i);

    const td_specie = document.createElement('td');
    td_specie.innerHTML = person.species;

    const td_link = document.createElement('td');
    const a_link = document.createElement('a');
    const img = document.createElement('img');
    img.src = person.image;

    a_link.href = "charactere.html?id="+person.id+"&name="+person.name;
    a_link.innerHTML = 'More details';
    node.appendChild(td_name);
    node.appendChild(td_status);
    node.appendChild(td_specie);

    a_link.appendChild(img);
    node.appendChild(img);

    td_link.appendChild(a_link);
    node.appendChild(td_link);
    return node;

}

const table = document.getElementById("myTable");

fetch('https://rickandmortyapi.com/api/location')
.then(function (response) {
    return response.json();
})
.then(function (data_location) {
    console.log(data_location.info)
    const characters = data_location.results
    characters.forEach(function (details_location) {
        const data = Reload(details_location)
        console.log(data_location)
        document.getElementById("mydetails_location").appendChild(data_location)
    })

})
.catch(function (err) {
    console.log(err);
});

//pagination
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page')
ShowPage(page)

