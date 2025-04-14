import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10'>
      <p className='text-2xl font-bold'>Socket.IO Chat</p>
      <nav>
        <ul className='flex space-x-4'>
          <li className='font-bold'>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li className='font-bold'>
            <Link href='/chat' className='hover:underline'>
              Chat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
