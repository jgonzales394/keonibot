var tmi = require('tmi.js');

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
  channels:["jgonzales394"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address,port){
  console.log("Address: "+ address +"Port: "+ port);
});


