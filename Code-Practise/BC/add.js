const Web3 = require('web3');
const rpcURL = 'https://ropsten.infura.io/v3/83f81ef97be34ecfa6700d58a6673888';
//const rpcURL = 'https://ropsten.infura.io/v3/430a6bf0aaa7453fa08741920c8bc005';
const web3 = new Web3(rpcURL)

function add(address, privateKey){
    this.address = address;
    this.privateKey = privateKey;
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

add.prototype.addsv = async function(ml, listsv){
    //list sv la mang string.
    var encodedABI = this.myAbi.methods.addsv(listsv, ml).encodeABI();
    var Tx = require('ethereumjs-tx').Transaction
    var private_Key_1 = new Buffer.from(this.privateKey,'hex');
    this.res;
    return await web3.eth.getTransactionCount(this.address, async (err,txCount) =>  {
        try {
            const ob ={
                from: this.address,
                nonce: web3.utils.toHex(txCount),
                to: this.contractAddress,
                data: encodedABI,
                gasLimit: web3.utils.toHex(3000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('40','gwei')),
                chainId:3
            }
            const tx = new Tx(ob, {chain:'ropsten', hardfork: 'petersburg'});
            tx.sign(private_Key_1);
            const serializedTransaction =tx.serialize();
            const raw ='0x'+serializedTransaction.toString('hex');

            this.res = await web3.eth.sendSignedTransaction(raw, async (err,txHash) => {
                if (err) return 1;
                else {
                    console.log("tx: "+ txHash);
                    return txHash;
                }
            });
            this.res = JSON.stringify(this.res);
            console.log(this.res);
            
        }
        catch(error){
            console.log(error);
            return 1;
        }
    });
    
};

add.prototype.addgr = async function(ml, listGr, id){
    var encodedABI = this.myAbi.methods.addgrades(ml, listGr, id).encodeABI();
    var Tx = require('ethereumjs-tx').Transaction
    var private_Key_1 = new Buffer.from(this.privateKey,'hex')
    this.res;
    return web3.eth.getTransactionCount(this.address, async (err,txCount) => {
        try {
            const ob ={
                from: this.address,
                nonce: web3.utils.toHex(txCount),
                to: this.contractAddress,
                data: encodedABI,
                gasLimit: web3.utils.toHex(3000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('40','gwei')),
                chainId:3
            }
            const tx = new Tx(ob, {chain:'ropsten', hardfork: 'petersburg'});
            tx.sign(private_Key_1);
            const serializedTransaction =tx.serialize();
            const raw ='0x'+serializedTransaction.toString('hex');

            this.res = await web3.eth.sendSignedTransaction(raw, async (err,txHash) => {
                if (err) return 1;
                else {
                    console.log("tx: "+ txHash);
                    return txHash;
                }
            });
            this.res = JSON.stringify(this.res);
            console.log(this.res);
        }
        catch(error){
            console.log(error);
        }
    });
    
};

//var Add = new add(address,privateKey);
//Add.addgr("lop1", ["3","3","3","3","3"], 1);

module.exports = add;