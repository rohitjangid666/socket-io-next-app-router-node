import { Chat } from '@/features/chat';

export default function Home() {
  return (
    <div className='container mx-auto flex flex-col items-center h-screen pt-10'>
      <p className='text-center gap-2'>
        <span className='text-4xl font-bold'>Socket.IO Chat</span>
        <br />
        <span className='text-sm text-gray-500'>A simple chat application using Socket.IO</span>
      </p>

      <Chat />
    </div>
  );
}
