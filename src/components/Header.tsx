"use client"

import React, { useState } from 'react';
import Link from "next/link";
import ContactDetails from './contacts/ContactDetails';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./themes/ThemeToggle";

const Header: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex justify-between items-center py-2 mb-6 sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90">
      <Link href="/" className="text-2xl font-bold hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-gray-200">KSHITIJ</Link>

      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-4">
        <nav className="flex gap-6 text-md">
          <Link href="/story" className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-gray-200">
            MY STORY
          </Link>
          <button onClick={() => setShowContact(true)} className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-gray-200">
            CONTACT 
          </button>
          <Link
            href="/Resume Main Kshitij Chaturvedi.pdf"
            className="hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </Link>
        </nav>
        <ThemeToggle />
      </div>

      {/* Mobile menu icon */}
      <div className="sm:hidden flex items-center gap-2">
        <ThemeToggle />
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-gray-900 dark:text-gray-200"
        >
          {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Contact Drawer */}
      {showContact && <ContactDetails onBack={() => setShowContact(false)} />}

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            {/* Dimmed background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowMobileMenu(false)}
            />

            {/* Fullscreen Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 p-6 flex flex-col bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-lg"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">menu</h2>
                <button onClick={() => setShowMobileMenu(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 text-lg font-medium text-gray-700 dark:text-gray-300">
                <Link href="/story" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-500 dark:hover:text-gray-400">
                  my story
                </Link>
                <button onClick={() => {
                    setShowMobileMenu(false);
                    setShowContact(true);
                  }} className="text-left hover:text-gray-500 dark:hover:text-gray-400"
                >
                  contact
                </button>
                <Link 
                  href="/Resume Kshitij Chaturvedi.pdf" 
                  onClick={() => setShowMobileMenu(false)} 
                  className="hover:text-gray-500 dark:hover:text-gray-400" 
                  target="_blank" rel="noopener noreferrer"
                >
                  resume
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
