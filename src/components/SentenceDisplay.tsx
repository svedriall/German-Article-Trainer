import React from 'react';
import { Word, Language } from '../types';
import SpeakerIcon from './SpeakerIcon';
import { translations } from '../services/translations';

interface SentenceDisplayProps {
  word: Word;
  language: Language;
}

const SentenceDisplay: React.FC<SentenceDisplayProps> = ({ word, language }) => {
  const uiText = translations[language];

  return (
    <div className="mt-8 w-full text-left bg-gray-900/50 p-4 sm:p-6 rounded-lg animate-fade-in">
      <h3 className="text-lg font-semibold text-gray-300 mb-4">{uiText.exampleSentencesTitle}</h3>
      <div className="space-y-4">
        {/* Nominativ Sentence */}
        <div>
          <p className="text-sm font-medium text-indigo-400">{uiText.nominativCase}</p>
          <div className="flex items-center mt-1">
            <p className="text-md sm:text-lg text-gray-100">{word.sentences.nominativ.de}</p>
            <SpeakerIcon text={word.sentences.nominativ.de} />
          </div>
          <p className="text-sm text-gray-400">{word.sentences.nominativ[language]}</p>
        </div>
        
        {/* Akkusativ Sentence */}
        <div>
          <p className="text-sm font-medium text-indigo-400">{uiText.akkusativCase}</p>
          <div className="flex items-center mt-1">
            <p className="text-md sm:text-lg text-gray-100">{word.sentences.akkusativ.de}</p>
            <SpeakerIcon text={word.sentences.akkusativ.de} />
          </div>
          <p className="text-sm text-gray-400">{word.sentences.akkusativ[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default SentenceDisplay;