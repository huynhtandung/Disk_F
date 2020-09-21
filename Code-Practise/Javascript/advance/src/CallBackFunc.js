/*function A(number){
    setTimeout(function(){
        console.log(number)
    }, 2000)
}
function B(func){
    if(typeof func !== 'function')
        console.log('Can truyen vao mot function')
    else
        return func(20)
}*/
//B(A);

// xu li tu khoa this trong call back function

function C(){
    this.Name = 'First';
    this.Age = '20';
    this.setName = function(name, age){
        this.Name = name;
        this.Age = age;
    }
    return this;
}
function D(callbackfunction, callbackObject){
    var [Name, Age] = ['Second', '21'];
    callbackfunction.apply(callbackObject, [Name, Age])
    
}

var c = new C();
D(c.setName, c)
console.log(c.Name, c.Age)



