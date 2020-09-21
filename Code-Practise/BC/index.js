var get = require("./get");
var add = require("./add");
var address = "0x6DeFAd2d9841203B9C7062c143FEd7295d065aaE";
var privateKey = "2c950eba9f6ddbc30db5d607f8db31b4aed7fa12fa9f74b8997cb09fb9af609e";

var Get = new get(address);
var Add = new add(address,privateKey);

function blockchain(address, privateKey){
    this.Get = new get(address);
    this.Add = new add(address, privateKey);
}


//ml is string
blockchain.prototype.getAll = async function(ml) {
    
    var re = await this.Get.getallsv(ml);
    var num;
    for (num  = 0; num < 100; num++){
        if (re[9][num] === "")
            break;
    }
    var id;
    for (id = 0; id < 10; id ++){
        if (re[id][0] === "")
            break;
    }
    var c = [];
    for (let i = 0; i < id; i ++){
        let cc = [];
        for (let j = 0; j < num; j++){
            cc.push(re[i][j]);
        }
        c.push(cc);
    }
    
    var ob = {
        ml:ml,
        siso: num,
        socot:id,
        bangdiem: c
    }
    
    return JSON.stringify(ob);
}
// ml, mssv is string
blockchain.prototype.get1sv = async function(ml, mssv){
    var re = await this.Get.getsv(mssv, ml);
    var ob = {
        ml:ml,
        mssv: mssv,
        diem: re
    }
    return JSON.stringify(ob);

}

// mssv is string, ml is array of string
blockchain.prototype.getAll1sv = async function(ml, mssv){
    var re = await this.Get.getall1sv(ml, mssv);
    var mon = ml.length;
    
    var c = [];
    for (let i = 0; i < mon; i++){
        let cc = [];
        for (let j = 0; j < 9; j++)
            cc.push(re[i][j]);
        c.push(cc);
    }
    var ob = {
        mssv: mssv,
        diem: c
    }
    return JSON.stringify(ob);
}
// ml is string, listsv is array of string (mssv)
blockchain.prototype.addsv = async function(ml, listsv){
    return await this.Add.addsv(ml, listsv);
}

//ml is string, listgr is array of string, id is int
blockchain.prototype.addgr = async function(ml, listgr, id){
    return await this.Add.addgr(ml, listgr, id);
}



module.exports = blockchain;

var BlockChain  = new blockchain(address, privateKey);

BlockChain.get1sv("MGM", "001").then(function(re){
    console.log(typeof re)
    console.log(re);
});


/*




BlockChain.addsv("lop3", ["1221", "1222", "1223"]).then(function(res){
    console.log(res);
});

*/
/*BlockChain.getAll("lop1").then(function(re){
    console.log(re);
});

BlockChain.get1sv("lop1", "1221").then(function(re){
    console.log(re);
});

BlockChain.getAll1sv(["lop1", "lop2"], "1221").then(function(re){
    console.log(re);
});


var a = function(){
    BlockChain.addgr("lop3", ["8", "10", "2"], 0).then(function(res){
        console.log(res);
    });
}*/

//setTimeout(a, 10000);

