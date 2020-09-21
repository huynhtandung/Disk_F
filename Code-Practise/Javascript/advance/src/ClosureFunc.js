function ClosureFunc(){
    this.Name = '';
    this.Type = '';
    return {
        get : function(){
            console.log(this.Name, this.Type)
        },
        set : function(name, type){
            this.Name = name;
            this.Type = type;
        }
    }
}

var x = new ClosureFunc()

x.set('Dung', 'I')

x.get();
