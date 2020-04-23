'use strict'


const http=require('http');
// var SocketIO=require('socket.io');
var app = require('./server');
var server=http.createServer(app);
// var servertwo=http.createServer(app);
// var socketControll=require('./socketserver');
// import * as GpsData from "./Controllers/GetGpsControllers";

var port = '3000';
// var ports='8888';

//  socketControll.setsocket(server);
// var io=SocketIO(server);
// io.on("connection",(socket)=>{
   
//     // socket.on("NewDatass",()=>{
//     //     getGpsData(socket);
//      console.log(`Socketid=${userNames}`);
        
    
//     // });
//     // function getGpsData(socket){
//     //   GpsData.CheckDataIsReceving(socket);
     
//     socket.on('setSocketId', function(data) {
//         var SocketId = socket.id;
//         var userId = data.userId;
//         userNames.push([ SocketId,userId]);
//         console.log(userNames);
//     });

//     // }
//     socket.emit("LogOut",()=>{
    
//     })
//    // getGpsData(socket);
//     socket.on("disconnect",()=>{

//         console.log("user disconneted");
//     })
// })

app.set('port', process.env.PORT || port);
server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
// app.set('ports', process.env.PORT || ports);
// servertwo.listen(app.get('ports'), () => {
//     console.log(`server on port ${app.get('ports')}`);
// });
// im
