var tmi = require('tmi.js');
var consts = require('./kappas');

var users = ["takarita324","jgonzales394","taurgan"];
var oauth = require('./Oauth');

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
    password: oauth.password
  },
  channels: users
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address,port){
  console.log("Address: "+ address +" Port: "+ port);
});

client.on("chat",function(channel, userstate, message, self){
  if(self) return;

  if((message=="!kappa" || message=="!Kappa") && (userstate.badges.broadcaster || "jgonzales394" || "taurgan") ){
      for (var i = 0; i < 7; i++) {
        client.say(channel,consts.kappas);
      }
    }
  if(userstate['display-name']=="KingTarik"){
    client.action(channel,"I see a :duck: :gun:");
  }  
});