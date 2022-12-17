// link this file in your html!
import 'bootstrap/dist/css/bootstrap.min.css';

import {GetWordDefinition} from ".//api/dictionary";
import {CreateWordItem} from ".//dom/word-item"

var button = document.getElementById('add');

button.addEventListener('click', async function(event) {
    event.preventDefault();

    var searchWord = document.getElementById('searchWord').value;

    if (searchWord.length > 0) {
        await GetWordDefinition(searchWord).then(data => {

            var definition = data[0].meanings[0].definitions[0].definition;
    
            CreateWordItem(searchWord, definition);
    
        }).catch(error => {
            console.log(error)
        })
    }

    else {
        alert("Please enter a word")
    }
});