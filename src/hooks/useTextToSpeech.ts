import { useState, useCallback, useEffect } from 'react';

// --- Start of Browser Voice Logic ---
let germanVoice: SpeechSynthesisVoice | null = null;
const findGermanVoice = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const voices = window.speechSynthesis.getVoices();
    germanVoice = voices.find(voice => voice.lang.startsWith('de')) || null;
  }
};
findGermanVoice();
if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = findGermanVoice;
}
// --- End of Browser Voice Logic ---


export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback((text: string) => {
    if (!('speechSynthesis' in window)) {
      console.error("Text-to-Speech not supported by this browser.");
      alert("Sorry, your browser doesn't support text-to-speech.");
      return;
    }

    // Always cancel previous speech to prevent queueing and to stop current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    if (germanVoice) {
      utterance.voice = germanVoice;
    } else {
      console.warn("German voice not found, using default.");
    }
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = (event) => {
      // The 'interrupted' error is expected when speech is cancelled manually.
      // We don't need to log this as a critical error.
      if (event.error !== 'interrupted') {
        console.error('SpeechSynthesis Error:', event.error);
      }
      setIsPlaying(false);
    };
    
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { speak, isPlaying };
};