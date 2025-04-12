import { useContext } from 'react';

import { type Socket } from 'socket.io-client';

import { SocketContext } from '@/context/socket';

export const useSocket = (): Socket | null => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }

  return context.socket;
};
