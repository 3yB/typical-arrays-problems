
exports.min = function min (array) {
    
    if (typeof array != `undefined` && array.length > 0) {
        let minNumb = array[0];

        for (let i = 1; i < array.length; i++) {
            array[i] < minNumb ? minNumb = array[i] : false;
        }
        return minNumb;
    } 

  return 0;
}

exports.max = function max (array) {

  if (typeof array != `undefined` && array.length > 0) {
    let maxNumb = array[0];

    for (let i = 1; i < array.length; i++) {
        array[i] > maxNumb ? maxNumb = array[i] : false;
    }
    return maxNumb;
} 

  return 0;
}

exports.avg = function avg (array) {

  if (typeof array != `undefined` && array.length > 0) {
    return array.reduce( (a, b) => a + b) / array.length;
} 

  return 0;
}
