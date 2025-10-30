import { useState, useCallback, useEffect } from 'react';

// --- Start of Browser Voice Logic ---
let germanVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

const findGermanVoice = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const voices = window.speechSynthesis.getVoices();
    
    if (voices.length > 0) {
      voicesLoaded = true;
      
      // Try to find the best German voice in order of preference
      const germanVoiceCandidates = [
        // Look for specific German voices (often better quality)
        voices.find(voice => voice.lang === 'de-DE' && voice.name.toLowerCase().includes('google')),
        voices.find(voice => voice.lang === 'de-DE' && voice.name.toLowerCase().includes('microsoft')),
        voices.find(voice => voice.lang === 'de-DE' && voice.name.toLowerCase().includes('natural')),
        // Any de-DE voice
        voices.find(voice => voice.lang === 'de-DE'),
        // Any German voice variant
        voices.find(voice => voice.lang.startsWith('de-')),
        // Any voice with German in the name
        voices.find(voice => voice.lang.startsWith('de'))
      ];
      
      germanVoice = germanVoiceCandidates.find(voice => voice !== undefined) || null;
      
      console.log('🎤 TTS Voice Info:', {
        totalVoices: voices.length,
        germanVoice: germanVoice ? {
          name: germanVoice.name,
          lang: germanVoice.lang,
          localService: germanVoice.localService
        } : 'No German voice found',
        availableGermanVoices: voices
          .filter(voice => voice.lang.startsWith('de'))
          .map(voice => ({ name: voice.name, lang: voice.lang }))
      });
    }
  }
};

// Initial voice loading
findGermanVoice();

// Listen for voice changes (voices load asynchronously in some browsers)
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    if (!voicesLoaded) {
      findGermanVoice();
    }
  };
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

    // Try to refresh German voice if not found
    if (!germanVoice && !voicesLoaded) {
      findGermanVoice();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set German language first (this is crucial)
    utterance.lang = 'de-DE';
    
    // Try to use a specific German voice if available
    if (germanVoice) {
      utterance.voice = germanVoice;
      console.log(`🗣️ Using German voice: ${germanVoice.name} (${germanVoice.lang})`);
    } else {
      console.warn("🚨 German voice not found. Using browser default with de-DE language.");
      console.log("Available voices:", window.speechSynthesis.getVoices().map(v => `${v.name} (${v.lang})`));
    }
    
    // Speech settings optimized for German
    utterance.rate = 0.8; // Slightly slower for better German pronunciation
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

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