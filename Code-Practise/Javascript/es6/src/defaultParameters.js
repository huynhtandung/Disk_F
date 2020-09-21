function A(name){
    name = name || 'A'
    console.log(name)
}

A(); A('Dung');

function B(name = 'A'){
    console.log(name)
}
B()