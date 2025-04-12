'use client';

import { useEffect, useState } from 'react';

import { io, type Socket } from 'socket.io-client';

import { config } from '@/config/config';
import { SocketContext } from '@/context/socket';

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io(config.urls.socket);
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
