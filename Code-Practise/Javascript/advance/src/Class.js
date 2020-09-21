export function Student(){
    this.Name = '';
    this.Age = '';

    this.setInfo = function(name, age){
        this.Name = name;
        this.Age = age;
    }

    this.showInfo = function(){
        console.log(this.Name, this.Age)
    }
    return this;
}
Student.prototype.Test = function(){
    console.log("Test")
}

export class Lecturer{
    constructor(){
        this.Name = 'Man';
        this.Age = '40';
    }
    showInfo(){
        console.log(this.Name, this.Age)
    }
}

