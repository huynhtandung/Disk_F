var x = new Set([1, 2, 3, 4, 5])

/*x.add(0)
x.delete(3)
console.log(x.size)

for (let value of x){
    console.log(value)
}

//chuyen set sang array
var arr = new Array(x)  // arr = [...x]
console.log(arr)

//chuyen array sang set
var set = new Set(arr)
console.log(set)

//ham mapping
var map = [...x].map(function(value, index){
    return value;
})
console.log('Map ', map)*/

//ham filter
var filter = [...x].filter((value, index)=>{
    return value%2 === 0
})
for ( let i of filter){
    console.log('Filter: ', i)
}