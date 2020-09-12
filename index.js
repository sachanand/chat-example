var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {

  	//request is received
  	//processing

  	msg.join = "approved"

    io.emit('chat message', msg);
    
    //
    console.log(msg.joinvideo);
    console.log(msg.userid);


  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});