
function capitalizeFirstLetter(word){
    let regExp = /[a-z]/i;
    let isLetter = regExp.test(word.charAt(0))

    if (word === "") {
        throw new Error("Need a letter to capitalize!")
    }

    if (isLetter) {
        const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
        return capitalized
    } else {
        throw new Error("Can only capitalize a letter!");
    }
}

function concatenate(wordOne, wordTwo){
    return String(wordOne) + String(wordTwo);
}

function returnSecondWord(string){
    let stringToArray = string.split(" ");
    if (stringToArray.length < 2){
        throw new Error("Needs at least two words!")
    }
    return stringToArray[1];
}

export {capitalizeFirstLetter, concatenate, returnSecondWord};