const Web3 = require('web3');



const rpcURL = 'https://ropsten.infura.io/v3/83f81ef97be34ecfa6700d58a6673888';
//const rpcURL = 'https://ropsten.infura.io/v3/430a6bf0aaa7453fa08741920c8bc005';
const web3 = new Web3(rpcURL)

function get(address){
    this.address = address;
    this.contractAddress = '0xF2e71d97fCDA6FcD93f2c89e6E2df8036EE9d9ca';
    this.abi = [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "classH",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "gra",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "addgrades",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "mssv",
                    "type": "string[]"
                },
                {
                    "internalType": "string",
                    "name": "classH",
                    "type": "string"
                }
            ],
            "name": "addsv",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "contructor",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "classH",
                    "type": "string"
                }
            ],
            "name": "getall",
            "outputs": [
                {
                    "internalType": "string[100][10]",
                    "name": "",
                    "type": "string[100][10]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "classH",
                    "type": "string[]"
                },
                {
                    "internalType": "string",
                    "name": "mssv",
                    "type": "string"
                }
            ],
            "name": "getall1sv",
            "outputs": [
                {
                    "internalType": "string[10][100]",
                    "name": "",
                    "type": "string[10][100]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "classH",
                    "type": "string"
                }
            ],
            "name": "getallDS",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "mssv",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "classH",
                    "type": "string"
                }
            ],
            "name": "getsv",
            "outputs": [
                {
                    "internalType": "string[10]",
                    "name": "",
                    "type": "string[10]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    this.myAbi = new web3.eth.Contract(this.abi);
    this.myAbi.options.address = this.contractAddress;
    this.myAbi.options.gasPrice = '20000000000000' ; // default gas price in wei
    this.myAbi.options.gas = 5000000 ;

}

get.prototype.getallsv = function(ml){
    return this.myAbi.methods.getall(ml).call({from: this.address}, function(error, result){
        if (error){
            throw error;
        }
    });
    
};

get.prototype.getallDS = function(ml){
    return this.myAbi.methods.getallDS(ml).call({from: this.address}, function(error, result){
        if (error){
            throw error;
        }
    });
    
};



get.prototype.getsv = function(mssv,ml){

    return this.myAbi.methods.getsv(mssv,ml).call({from: this.address}, function(error, result){
        if (error) throw error;
        
    });
};

get.prototype.getall1sv = function(ml, mssv){

    return this.myAbi.methods.getall1sv(ml, mssv).call({from: this.address}, function(error, result){
        if (error) throw error;
       
    });
};


module.exports = get;