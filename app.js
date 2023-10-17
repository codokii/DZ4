var array = ['name', 'John', 'lastname', 'Black', 'age', '23'];
var object = {}
for (var i = 0; i < array.length ; i+=2) {
    var key = array[i]
    var result = array[i+1]
    object[key] = result
}
console.log(object)


function calculateAverage(...args) {
    if (args.length === 0) {
        return null;
    }
    var total = args.reduce((sum, num) => sum + num, 0);
    var average = total / args.length;
    return average;
}


function getDataType(value) {
    var dataType = typeof value;
    console.log(dataType);
    return dataType;
}

getDataType(true);
getDataType('Hello');
getDataType(20);