import React from 'react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

interface SpeakerIconProps {
  text: string;
}

const SpeakerIcon: React.FC<SpeakerIconProps> = ({ text }) => {
  const { speak, isPlaying } = useTextToSpeech();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    speak(text);
  };

  const iconClass = `h-5 w-5 sm:h-6 sm:w-6 cursor-pointer transition-colors ${
    isPlaying ? 'text-indigo-400' : 'text-gray-400 hover:text-white'
  }`;

  return (
    <button onClick={handleClick} disabled={isPlaying} className="focus:outline-none ml-2">
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 15.858a5 5 0 01-2.828-7.072m9.9 9.9A9 9 0 013.03 5.03m11.94 6.97a3 3 0 01-4.242 0" />
      </svg>
    </button>
  );
};

export default SpeakerIcon;