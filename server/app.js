import { Server } from 'socket.io';

import config from './src/config/index.js';
import socketHandler from './src/sockets/index.js';

const io = new Server({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  socketHandler(socket, io);
});

io.listen(config.server.socket_port, () => {
  console.log(`Server is running on port ${config.server.socket_port}`);
});
