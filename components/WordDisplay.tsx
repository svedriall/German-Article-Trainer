import React from 'react';
import { Word, Language, Article } from '../types';
import SpeakerIcon from './SpeakerIcon';

interface WordDisplayProps {
  word: Word;
  language: Language;
  showResult: boolean;
}

const articleColorClasses: Record<Article, string> = {
  der: 'text-der',
  die: 'text-die',
  das: 'text-das',
};

const WordDisplay: React.FC<WordDisplayProps> = ({ word, language, showResult }) => {
  const articleColor = showResult ? articleColorClasses[word.article] : 'text-white';
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <h2 className={`text-5xl sm:text-7xl font-bold transition-colors duration-300 ${articleColor}`}>
          {showResult && `${word.article} `}{word.word}
        </h2>
        <SpeakerIcon text={word.word} />
      </div>
      <p className="mt-4 text-xl sm:text-2xl text-gray-400">{word.translations[language]}</p>
    </div>
  );
};

export default WordDisplay;