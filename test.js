const Web3 = require('web3');
const etherUrl = "https://ropsten.infura.io/da121d8df7d94d7e9268f25855f86d07";
const abi = [ { "constant": true, "inputs": [ { "name": "_timestamp", "type": "uint256" } ], "name": "getBetsOnTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "isPlayer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "startDate", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maxCost", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countSecondWinners", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "leader", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "costPerTicket", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" }, { "name": "", "type": "uint256" } ], "name": "betHistory", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "confirmreward", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_timestamps", "type": "uint256[]" }, { "name": "_referral", "type": "address" } ], "name": "bet", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "rewardPool", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "secondWinnerTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "confirm", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "referral", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "announcedTimeStamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "numOfConfirmationNeeded", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "winnerTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countBet", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "leader_3", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countWinners", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "confirmed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countPlayer", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "expireDate", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "announced", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "timestampList", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "countReferral", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "playerBets", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "hasConfirmed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_timestamp", "type": "uint256" } ], "name": "announce", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "averageTimestamp", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "countConfirmed", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "leader_2", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "bets", "type": "uint256" }, { "indexed": true, "name": "player", "type": "address" } ], "name": "Bet", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "player", "type": "address" } ], "name": "Confirm", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "player", "type": "address" }, { "indexed": false, "name": "reward", "type": "uint256" } ], "name": "Payreward", "type": "event" } ];
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider(etherUrl));
const Contract = new web3.eth.Contract(abi,"0x673833E4Bbcf03620F4898568E06Cc5C06e35C75");

var http = require('http');
var fs = require('fs');
var express = require('express');
var path    = require("path");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));


var owner = "0x12345";

app.get('/', function (req, res) {
	var ref = owner;
	if(req.query.ref)
		ref = req.query.ref;
	res.sendFile(path.join(__dirname+'/index.html'));
	io.sockets.on('connection', function (socket) {
		socket.emit('ref', {
			referral : ref
		});
	});
})

app.post('/bet',function(req,res){
	var ref = owner;
	if(req.query.ref!=ref)
		ref = req.body.ref;
	res.sendFile(path.join(__dirname+'/bet.html'));
	io.sockets.on('connection', function (socket) {
		socket.emit('ref', {
			referral : ref
		});
	});
});

app.get('/bet',function(req,res){
	var ref = owner;
	res.sendFile(path.join(__dirname+'/bet.html'));
	io.sockets.on('connection', function (socket) {
		socket.emit('ref', {
			referral : ref
		});
	});
});

app.get('/leaderboard',function(req,res){
	res.sendFile(path.join(__dirname+'/leaderboard.html'));
});

app.get('/rules',function(req,res){
	res.sendFile(path.join(__dirname+'/rules.html'));
});

var config = JSON.parse(fs.readFileSync('server-config.json', 'utf8'));

var server = app.listen(config.port, config.ip, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

var data_dict = {
	reward: 0,
	players: 0,
	timestamp: 0,
	betCount: 0,
	price: 0,
  leader:'0x7bd36863951561469f820b3e65e612172392b59a',
  leader_2:'0x7bd36863951561469f820b3e65e612172392b59a',
  leader_3:'0x7bd36863951561469f820b3e65e612172392b59a',
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
	update(Contract, "leader","leader");
  update(Contract, "leader_2","leader_2");
  update(Contract, "leader_3","leader_3");
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
			price: data_dict.price / 1000000000000000000,
      leader: data_dict.leader,
      leader_2: data_dict.leader_2,
      leader_3: data_dict.leader_3
		});
	}, 1000);
});
