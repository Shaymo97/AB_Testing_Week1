//return the biggest number 
//from an array

const getBigger = (a,b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

const getSmallest = (arr) => {
    if (arr.length == 0) {
        return null
    } else {
        let smallest = arr[0]
        for (let i = 1; i <arr.length; i++) {
            if (arr[i] < smallest){
            smallest = arr[i]
            }
        }
     return smallest   
    }
}

const countValue = (arr,num) => {
    if (!arr || arr.length === 0){
        return 0
    } else if (num == null) {
        return null
    } else {
        let count = 0
        for(let i = 0; i < arr.length; i++){
            if (arr[i] === num) {
                count++
            }
        } return count
    }
}

module.exports = {
    getBigger,
    getSmallest,
    countValue
}