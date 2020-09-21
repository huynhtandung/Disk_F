console.log(typeof (()=>{}))

var blog = {
    domain : "freetuts.net",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite((() => {
           console.log(this.domain); // this chính là blog
        }));
    }
};
 
blog.render();