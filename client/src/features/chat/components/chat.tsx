'use client';

import { useEffect, useState } from 'react';

import { useSocket } from '@/hooks/use-socket';
import type { MessageType } from '@/types';

export const Chat = () => {
  const socket = useSocket();
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.emit('getMessages', 'Rohit Jangid');
    socket.on('getMessagesResponse', (messages: MessageType[]) => {
      console.log(`🔥💻 [my logger ~~~~~~~~~~ messages] -------- `, messages);
    });

    socket.on('sendMessage', (message: string) => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          sender: 'other',
          message,
        },
      ]);
    });

    return () => {
      socket.off('sendMessage');
    };
  }, [socket]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    if (!socket) {
      alert('Socket not connected');
      return;
    }

    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get('message') as string;

    socket.emit('sendMessage', message);

    setMessages([
      ...messages,
      {
        sender: 'me',
        message,
      },
    ]);

    form.reset();
  };

  return (
    <div className='px-20 py-5'>
      <h1 className='text-2xl font-bold text-center mb-5'>Live Chat Without database</h1>
      <div className='space-y-10 mb-5'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-md text-black ${
              message.sender === 'me' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
            }`}
          >
            {message.message}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className='flex space-x-2'>
        <input
          type='text'
          name='message'
          placeholder='Type your message...'
          className='border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 bg-transparent dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white'
        />
        <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border dark:border-white border-black hover:border-transparent rounded-lg'>
          Send
        </button>
      </form>
    </div>
  );
};
