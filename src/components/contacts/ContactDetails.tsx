import React from 'react';
import { motion } from "motion/react";
import { contactDetails } from '../../content/contacts';
import { Mail, Github, Linkedin, Twitter,  Pencil } from 'lucide-react';

interface ContactDetailsProps {
    onBack: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
    email: <Mail size={14} className='mr-2' />,
    linkedin: <Linkedin size={14} className='mr-2' />,
    github: <Github size={14} className='mr-2' />,
    x: <Twitter size={14} className='mr-2' />,
    medium: <Pencil size={14} className='mr-2' />,
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ onBack }) => (
    <div
        className="fixed inset-0 bg-black bg-opacity-10 z-40 flex items-start justify-end"
        onClick={onBack}
    >
    <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 right-0 h-full w-[320px] sm:w-[400px] max-w-sm bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-50 border-gray-200"
        onClick={e => e.stopPropagation()}
    >
        <div
        className="p-6 font-mono flex flex-col justify-between items-start"
        onClick={e => e.stopPropagation()}
        >
            <h2 className="text-xl mb-4 text-gray-800">contact info. <span className="text-md">→</span></h2>
            <ul className="mb-2 list-none text-gray-600 p-0">
                {Object.entries(contactDetails).map(([key, { id, link, placeholder }]) => (
                    <li key={key} className="mb-2 ml-1 flex items-center">
                        {iconMap[id]}
                        <span className="lowercase font-semibold mr-2">{id}: </span>
                        <a
                            href={link}
                            className="text-blue-500 hover:text-gray-600 break-all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {placeholder ?? link}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={onBack} className="mt-2 ml-1 text-blue-500 hover:text-gray-600">
                go back
            </button>
        </div>
    </motion.div>
    </div>
);

export default ContactDetails;