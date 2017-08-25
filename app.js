var tmi = require('tmi.js');
var consts = require('./kappas');

var users = ["takarita324"];
var bc = users[0];

var options ={
  options:{
    debug: true
  },
  connection:{
    cluster: "aws",
    reconnect: true
  },
  identity:{
    username: "keonibot",
    password: "oauth:ov6hqddafha7mmksmgj4woprlhyrxc"
  },
  channels: users
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address,port){
  console.log("Address: "+ address +"Port: "+ port);
});

client.on("chat",function(channel, userstate, message, self){
  if(self) return;

  if(message=="!kappa" || message=="!Kappa"){
    if(userstate['display-name']==bc || userstate['display-name']=="jgonzales394"){
      for (var i = 0; i < 5; i++) {
        client.say(channel,consts.kappas);
      }
    }
  }  
});