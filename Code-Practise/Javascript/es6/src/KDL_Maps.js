/*var m = new Map([
    [1, 'Dung'],
    ['Dung', 21],
    [true, 1]
])

m.set(1, 'Huynh Tan Dung')

var arr = [...m]
arr.forEach(value =>{
    console.log(value)
})

//duyet map
for ( var [x, y] of m){
    console.log(x, y)
}

m.forEach((key, value)=>{
    console.log(key, value)
})

for (let i of m.keys()){  // m.values() m.entries()
    console.log(i)
}*/

var mapOb = new Map([
    [{1 : 6}, 10],
    [{2 : 12}, 20],
])
var k ;
for( let key of mapOb.keys()){
    //console.log(key)
    //console.log(mapOb.has(key))
    k = key;
}

console.log('K = ', k)
console.log('K = ', {2 : 12})
console.log(k === ({2 : 12}) ? 'Yes' : 'No')
