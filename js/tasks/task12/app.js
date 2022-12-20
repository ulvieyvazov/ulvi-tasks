function removeElement(array, eded) {
    const temp = []
    for (let elem of array) {
        if (elem !== eded) {
            temp.push(elem)
        }
    }
    return temp;
}
console.log(removeElement([1, 2, 3, 4], 3));

function tek_cut(massiv) {
    const temp = []
    for (let eded of massiv) {
        if (eded % 2 == 0) {
            temp.push(eded)
        }
    }
    return temp;
}
console.log(tek_cut([1, 4, 7, 6, 3, 8]));
