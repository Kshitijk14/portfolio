import React from 'react';
import { Github, Linkedin, Twitter,  Pencil } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-6 pb-0 border-t border-gray-200 sticky bottom-0 z-40 backdrop-blur bg-white/70">
      {/* <p className="text-center text-gray-500 text-sm mb-4">
        © 2025 KSHITIJ. All rights reserved.
      </p> */}
      <div className="flex justify-center gap-6">
        <a href="https://github.com/Kshitijk14"  target="_blank" className="hover:text-gray-500">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/kshitij-chaturvedi-a1883222b/" className="hover:text-gray-500">
          <Linkedin size={20} />
        </a>
        <a href="https://x.com/kkshitijj02"  target="_blank" className="hover:text-gray-500">
          <Twitter size={20} />
        </a>
        <a href="https://medium.com/@kshitijhrms"  target="_blank" className="hover:text-gray-500">
          <Pencil size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
