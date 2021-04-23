function firstElement(array) {
    if(array.length == 0) {
        return new Error("firstElement called with[]");
    }
    return array[0];
}

let list = [3,4,5,3];
console.log(firstElement(list));