import React from 'react';
// import { Github, Linkedin, Twitter,  Pencil } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-6 pb-0 border-t sticky bottom-0 z-40 backdrop-blur bg-white/90 dark:bg-zinc-900/90">
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-2">
        Kshitij © 2025
      </p>
      {/* <div className="flex justify-center gap-6">
        <a href="https://github.com/Kshitijk14" target="_blank" className="hover:text-gray-500">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/kshitijj-chaturvedi/" target="_blank" className="hover:text-gray-500">
          <Linkedin size={20} />
        </a>
        <a href="https://x.com/kkshitijj02" target="_blank" className="hover:text-gray-500">
          <Twitter size={20} />
        </a>
        <a href="https://medium.com/@kshitiijj" target="_blank" className="hover:text-gray-500">
          <Pencil size={20} />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
