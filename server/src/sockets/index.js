const chatMessages = [
  {
    id: 1,
    message: 'Hello, how are you?',
  },
  {
    id: 2,
    message: 'I am fine, thank you!',
  },
  {
    id: 3,
    message: 'What about you?',
  },
  {
    id: 4,
    message: 'I am doing great, thanks for asking!',
  },
  {
    id: 5,
    message: 'What are you up to?',
  },
  {
    id: 6,
    message: 'Just working on some projects.',
  },
  {
    id: 7,
    message: 'That sounds interesting!',
  },
  {
    id: 8,
    message: 'Yes, it is!',
  },
  {
    id: 9,
    message: 'I love coding!',
  },
  {
    id: 10,
    message: 'Me too!',
  },
  {
    id: 11,
    message: 'What languages do you like?',
  },
  {
    id: 12,
    message: 'I like JavaScript and Python.',
  },
  {
    id: 13,
    message: 'Same here!',
  },
  {
    id: 14,
    message: 'What frameworks do you use?',
  },
  {
    id: 15,
    message: 'I use React and Django.',
  },
];

const socketHandler = (socket, io) => {
  console.log('A user connected:', socket.id);

  socket.on('sendMessage', message => {
    socket.broadcast.emit('sendMessage', message);
  });

  socket.on('getMessages', userName => {
    console.log('User requested messages:', userName);
    socket.emit('getMessagesResponse', chatMessages);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
};

export default socketHandler;
