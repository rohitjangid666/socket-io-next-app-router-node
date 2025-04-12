import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    socket_port: process.env.SOCKET_PORT || 8000,
  },
};

export default config;
