const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const routes = require('./router')

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

app.use(routes)

io.on('connection', (socket) => {

 socket.on('join', ({ name, room }, callback) => {

   const { error, user } = addUser({id: socket.id, name, room})

   if(error) return callback(error)

   socket.join(user.room)

   socket.emit('message', { user: 'Admin', text: `${user.name} welcome to ${user.room}!`})
   socket.broadcast.to(user.room, { user: 'Admin', text: `${user.name} has joined!`})

   io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

   callback()
 })

 socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    callback()
 })

 socket.on('disconnect', () => {
   const user = removeUser(socket.id)

   io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} left the room.`})
 })
});

http.listen(4000, () => {
  console.log('listening on 4000');
});