import { type Socket } from 'socket.io-client';

export interface SocketContextType {
  socket: Socket | null;
}
