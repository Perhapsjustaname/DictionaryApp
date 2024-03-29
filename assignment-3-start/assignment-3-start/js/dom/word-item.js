/*
HTML Structure 

<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto definition">
        <div class="fw-bold">WORD HERE</div>
        <p>PARAGRAPH HERE</p>
    </div>
    <button class="m-2 btn btn-primary favourite-word">Add To Favourites</button>
</li>


Note: I'm sure you've read the PDF but there will be no marks given
for using innerHTML. 
*/

function CreateWordItem(word, definition) {

    var list = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto definition">
        <div class="fw-bold">${word}</div>
        <p>${definition}</p>
    </div>
    <button class="m-2 btn btn-primary favourite-word">Add To Favourites</button>
</li>
    `
 
    var liNode = document.createElement("li");
    liNode.innerHTML = list;

    document.getElementById("recentSearch").appendChild(liNode);
}

export {CreateWordItem};