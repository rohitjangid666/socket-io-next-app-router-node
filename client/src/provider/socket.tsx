'use client';

import { useEffect, useState } from 'react';

import { io, type Socket } from 'socket.io-client';

import { config } from '@/config/config';
import { SocketContext } from '@/context/socket';

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const socketInstance = io(config.urls.socket);
      setSocket(socketInstance);

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [isAuthenticated]);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
