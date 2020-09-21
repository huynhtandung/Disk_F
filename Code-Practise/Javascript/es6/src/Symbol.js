var sb1 = Symbol()
var sb2 = Symbol({1 : 2})
console.log(typeof sb1, typeof sb2)
console.log(sb1 === sb2)

var key = Symbol();
var ob = {
    [key] : 10
}
console.log(ob[key])

//ep kieu symbol

var sb3 = Symbol('hehe')
var sb4 = Symbol('hehe')
console.log(sb3 === sb4)
console.log(typeof (Boolean(sb3)), Boolean(sb3))
console.log(typeof (String(sb3)), String(sb3))