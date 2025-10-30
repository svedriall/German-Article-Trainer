import { useState, useCallback, useEffect } from 'react';

// --- ResponsiveVoice TTS Configuration ---
declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice?: string, parameters?: {
        onstart?: () => void;
        onend?: () => void;
        onerror?: (event: any) => void;
        rate?: number;
        pitch?: number;
        volume?: number;
      }) => void;
      cancel: () => void;
      isPlaying: () => boolean;
      voiceSupport: () => boolean;
      getVoices: () => any[];
    };
  }
}

// Check ResponsiveVoice availability
const isResponsiveVoiceAvailable = () => {
  return typeof window !== 'undefined' && 
         typeof window.responsiveVoice !== 'undefined' && 
         window.responsiveVoice.voiceSupport();
};

// --- Browser Voice Fallback Logic ---
let germanVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

const findGermanVoice = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const voices = window.speechSynthesis.getVoices();
    
    if (voices.length > 0) {
      voicesLoaded = true;
      germanVoice = voices.find(voice => voice.lang.startsWith('de')) || null;
    }
  }
};

// Initialize fallback voices
findGermanVoice();
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    if (!voicesLoaded) {
      findGermanVoice();
    }
  };
}


export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback((text: string) => {
    // Try ResponsiveVoice first (high-quality, reliable)
    if (isResponsiveVoiceAvailable()) {
      console.log('🎤 Using ResponsiveVoice TTS for:', text);
      
      // Cancel any current speech
      window.responsiveVoice.cancel();
      
      // Use ResponsiveVoice with German Female voice
      window.responsiveVoice.speak(text, "Deutsch Female", {
        rate: 0.9, // Slightly slower for clarity
        pitch: 1,
        volume: 1,
        onstart: () => {
          setIsPlaying(true);
          console.log('🗣️ ResponsiveVoice: Started speaking');
        },
        onend: () => {
          setIsPlaying(false);
          console.log('✅ ResponsiveVoice: Finished speaking');
        },
        onerror: (event) => {
          console.error('❌ ResponsiveVoice Error:', event);
          setIsPlaying(false);
          // Fallback to browser TTS on error
          speakWithBrowserTTS(text);
        }
      });
      return;
    }

    // Fallback to browser TTS
    console.log('� Falling back to browser TTS');
    speakWithBrowserTTS(text);
  }, []);

  const speakWithBrowserTTS = (text: string) => {
    if (!('speechSynthesis' in window)) {
      console.error("Text-to-Speech not supported by this browser.");
      alert("Sorry, your browser doesn't support text-to-speech.");
      return;
    }

    // Always cancel previous speech
    window.speechSynthesis.cancel();

    // Try to refresh German voice if not found
    if (!germanVoice && !voicesLoaded) {
      findGermanVoice();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    
    if (germanVoice) {
      utterance.voice = germanVoice;
      console.log(`�️ Using browser German voice: ${germanVoice.name}`);
    } else {
      console.warn("⚠️ Using browser default with de-DE language");
    }
    
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = (event) => {
      if (event.error !== 'interrupted') {
        console.error('Browser TTS Error:', event.error);
      }
      setIsPlaying(false);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Log TTS initialization
    setTimeout(() => {
      if (isResponsiveVoiceAvailable()) {
        console.log('🎉 ResponsiveVoice TTS initialized successfully!');
        console.log('   • German Female voice available');
        console.log('   • High-quality pronunciation enabled');
      } else {
        console.log('⚠️ ResponsiveVoice not available, using browser TTS fallback');
      }
    }, 1000); // Give ResponsiveVoice time to load

    // Cleanup on unmount
    return () => {
      if (isResponsiveVoiceAvailable()) {
        window.responsiveVoice.cancel();
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { speak, isPlaying };
};