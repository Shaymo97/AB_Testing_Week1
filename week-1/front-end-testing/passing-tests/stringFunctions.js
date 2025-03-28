const getLonger = (string1, string2) => {
    if(string1 == null || string2 == null) {
        throw Error("This function requires two arguments!")
    }  else if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        throw Error("Arguments must be strings!")
    } else {
        if (string1.length > string2.length){
            return string1
        } else {
            return string2
        }
    }


}

const greet = (name) => {
    if(!name){
        return "Hi!"
    } else {
        return `Hello, ${name}!`
    }
}

const isSubstring = (a,b) => {
    if (a == "" || b == "") {
        throw Error("Arguments must have a length greater than zero!")
    } else if(!a || !b) {
        throw Error("This function requires two arguments!")
    } else if (typeof a !== 'string'|| typeof a !== 'string'){
        throw Error("Arguments must be strings!")
    } else {
        return a.includes(b) ? true : false
    }
    }

module.exports = {
    getLonger,
    greet,
    isSubstring
}