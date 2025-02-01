import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-16 sticky top-0 z-40 backdrop-blur bg-white/70">
      <h1 className="text-xl font-bold">KSHITIJ</h1>
      <nav className="flex gap-6">
        {/* <a href="#contact" className="hover:text-gray-500">
          CONTACT 
        </a> */}
        <a
          href="https://drive.google.com/file/d/1xZ1bILcJ8H6LaqzlAu6h5QB6ABubkVy1/view?usp=drive_link"
          className="hover:text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </nav>
    </header>
  );
};

export default Header;
