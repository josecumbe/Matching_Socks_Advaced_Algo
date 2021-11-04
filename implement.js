function findNumberOfPairs(n, l_colors) {
    let counter = 0;
    var observedColors = []
    for(i = 0; i < n; i++) {
        if(observedColors.includes(l_colors[i])) {
            var index = observedColors.indexOf(l_colors[i])
            observedColors.splice(index, 1)
            counter++
        }
        else {
            observedColors.push(l_colors[i])
        }
    }

    return counter

}

array1 = ['maroon', 'green', 'red', 'green', 'silver', 
'purple', 'black', 'white', 'blue', 'fushsia', 'blue', 'red', 'green', 
'gray', 'yellow', 'red', 'green', 'red', 'green', 'navy', 
'silver', 'black', 'teal', 'lime', 'black', 'purple', 'red', 'green', 
'orange', 'yellow']

console.log('Array1 with 30 colors has ' + findNumberOfPairs(30, array1) + ' Pairs of Colors')


array2 = ['maroon', 'green', 'red', 'green', 'silver', 
'purple', 'black', 'white', 'blue', 'fushsia', 'blue', 'red', 'green', 
'gray', 'yellow', 'red', 'green', 'red', 'green', 'navy', 
'silver', 'black', 'teal', 'lime', 'black', 'purple', 'red', 'green', 
'orange', 'yellow', 'maroon', 'green', 'red', 'green', 'silver', 
'purple', 'black', 'white', 'blue', 'fushsia', 'blue', 'red', 'green', 
'gray', 'yellow', 'red', 'green', 'red', 'green', 'navy', 
'silver', 'black', 'teal', 'lime', 'black', 'purple', 'red', 'green', 
'orange', 'yellow', 'green', 'red', 'green', 'green', 'red', 'red', 'black', 'white',
'teal', 'purple', 'navy', 
'silver', 'navy', 'silver', 'navy', 'silver', 'navy', 'silver', 'aqua', 'gold']

console.log('Array2 with 80 colors has ' + findNumberOfPairs(80, array2) + ' Pairs')