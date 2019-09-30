const plur = require('plur');

const uniqElements = arr => [...new Set(arr)];
// uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

module.exports = function (arr) {
    let plurals = [];
    arr.forEach(item => {
        plurals.push(plur(item));
    });

    return uniqElements(arr.concat(plurals));
}