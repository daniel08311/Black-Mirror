const Web3 = require('web3');
const etherUrl = "https://ropsten.infura.io/da121d8df7d94d7e9268f25855f86d07";
const abi = [ { "anonymous": false, "inputs": [ { "indexed": true, "name": "player", "type": "address" }, { "indexed": false, "name": "reward", "type": "uint256" } ], "name": "Payreward", "type": "event" }, { "constant": false, "inputs": [ { "name": "_timestamp", "type": "uint256" } ], "name": "announce", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "bets", "type": "uint256" }, { "indexed": true, "name": "player", "type": "address" } ], "name": "Bet", "type": "event" }, { "constant": false, "inputs": [ { "name": "_timestamps", "type": "uint256[]" }, { "name": "_referral", "type": "address" } ], "name": "bet", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "player", "type": "address" } ], "name": "Confirm", "type": "event" }, { "constant": false, "inputs": [], "name": "confirm", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "inputs": [], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "constant": true, "inputs": [], "name": "announced", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "announcedTimeStamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "averageTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "betHistory", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "confirmed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "confirmreward", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "costPerTicket", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countBet", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countConfirmed", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countPlayer", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "countReferral", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countSecondWinners", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countWinners", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "expireDate", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_timestamp", "type": "uint256" } ], "name": "getBetsOnTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "hasConfirmed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "isPlayer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maxCost", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "numOfConfirmationNeeded", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "referral", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPool", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "secondWinnerTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "startDate", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "timestampList", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "winnerTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider(etherUrl));
const Contract = new web3.eth.Contract(abi,"0x0bb415008a21a619a1492eb47d27f94e7a2cfd27");

var http = require('http');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('server-config.json', 'utf8'));

var server = http.createServer(function(req, res) {

    fs.readFile('./index.html', 'utf-8', function(error, content) {

        res.writeHead(200, {"Content-Type": "text/html"});

        res.end(content);

    });

});

var data_dict = {
	reward: 0,
	players: 0,
	timestamp: 0,
	betCount: 0,
	price: 0,
};

function update(contract, contractFuncName, key){
	contract.methods[contractFuncName]().call({},(err,result)=>{;
		if(!err)
			data_dict[key]=result;
	});
}

setInterval(function() {

  	update(Contract, "rewardPool", "reward");
  	update(Contract, "averageTimestamp", "timestamp");
  	update(Contract, "countPlayer", "players");
	update(Contract, "countBet", "betCount");
	update(Contract, "costPerTicket","price");
	console.log("Current Clients : " + io.engine.clientsCount);

}, 4000);

server.listen(config.port, config.ip);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	setInterval(function() {
		socket.emit('data', {
			reward: data_dict.reward / 1000000000000000000,
			players: data_dict.players ,
			estTimestamp: data_dict.timestamp,
			bets: data_dict.betCount,
			price: data_dict.price / 1000000000000000000
		});
	}, 1000);
});
