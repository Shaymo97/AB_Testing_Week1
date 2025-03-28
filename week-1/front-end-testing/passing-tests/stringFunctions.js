const getLonger = (string1, string2) => {
    if(!string1 || !string2) {
        throw Error("This function requires two arguments!")
    }  else if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        throw Error("Arguments must be strings!")
    }


}

const greet = () => {

}

const isSubstring = () => {

}

module.exports = {
    getLonger,
    greet,
    isSubstring
}