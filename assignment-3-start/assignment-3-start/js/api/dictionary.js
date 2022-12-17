// fetch from the dictionary api here!

async function GetWordDefinition(word) {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch(error => {
            console.log(error)
        });
}

export {GetWordDefinition};