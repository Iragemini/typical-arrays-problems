
exports.min = function min (array) {
    
    if(Array.isArray(array) === false) return 0;
    if(array.length === 0) return 0;
    
    array.sort((a, b) => b - a);
    let positionMin = array.length - 1;
    let minElem = array[positionMin];
    return minElem;
}

exports.max = function max (array) {
    
    if(Array.isArray(array) === false) return 0;
    if(array.length === 0) return 0;

    array.sort((a, b) => b - a);
    let maxElem = array[0];
    return maxElem;
}

exports.avg = function avg (array) {
    
    if(Array.isArray(array) === false) return 0;
    if(array.length === 0) return 0;

    let sumElement = array.reduce((sum, current) => sum + current, 0);
    let result = sumElement / array.length;
    return result;
}
