var blog = {
    domain : "freetuts.net",
    author : "Nguyễn Văn Cường",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        var _self = this;
        this.showWebsite(function(){
            console.log(_self); // là đối tượng this
            console.log(_self.domain); // ok
            console.log(_self.author); /// ok
        });
    }
};

var blogBind = {
    domain : "freetuts.net",
    author : "Nguyễn Văn Cường",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite(function(){
            console.log(this); // là đối tượng this
            console.log(this.domain); // ok
            console.log(this.author); /// ok
        }.bind(this))
    }
};
 
blog.render();
blogBind.render();
 
blog.render();