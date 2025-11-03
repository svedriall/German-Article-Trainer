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
      
      // Try ResponsiveVoice with correct German voice names
      let germanVoice: string | undefined = "Deutsch Female"; // ResponsiveVoice's actual German voice name
      
      // Verify the voice exists
      try {
        const voices = window.responsiveVoice.getVoices();
        const voiceExists = voices.some(v => v.name === germanVoice);
        
        if (!voiceExists) {
          console.warn('⚠️ Deutsch Female not found, trying Deutsch Male...');
          const maleVoiceExists = voices.some(v => v.name === 'Deutsch Male');
          
          if (maleVoiceExists) {
            germanVoice = 'Deutsch Male';
            console.log('✅ Using Deutsch Male voice instead');
          } else {
            console.warn('⚠️ No Deutsch voices found, using system default');
            germanVoice = undefined; // Use system default
          }
        }
      } catch (error) {
        console.error('Error verifying voice:', error);
        germanVoice = undefined; // Fallback to system default
      }
      
      console.log('🎯 Final voice selection:', germanVoice || 'system default');
      
      // Use ResponsiveVoice with selected German voice
      window.responsiveVoice.speak(text, germanVoice, {
        rate: 0.9, // Slightly slower for clarity
        pitch: 1,
        volume: 1,
        onstart: () => {
          setIsPlaying(true);
          console.log('🗣️ ResponsiveVoice: Started speaking with voice:', germanVoice);
        },
        onend: () => {
          setIsPlaying(false);
          console.log('✅ ResponsiveVoice: Finished speaking');
        },
        onerror: (event) => {
          console.error('❌ ResponsiveVoice Error:', event);
          console.log('🔍 Voice that failed:', germanVoice);
          console.log('🔄 Attempting fallback to browser TTS...');
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
    // Log TTS initialization and available voices
    setTimeout(() => {
      if (isResponsiveVoiceAvailable()) {
        console.log('🎉 ResponsiveVoice TTS initialized successfully!');
        
        try {
          const voices = window.responsiveVoice.getVoices();
          console.log('   • All available voices:', voices.map(v => v.name));
          
          const deutschFemale = voices.find(v => v.name === 'Deutsch Female');
          const deutschMale = voices.find(v => v.name === 'Deutsch Male');
          
          if (deutschFemale) {
            console.log('   ✅ Deutsch Female voice is available');
          } else {
            console.log('   ❌ Deutsch Female voice not found');
          }
          
          if (deutschMale) {
            console.log('   ✅ Deutsch Male voice is available');
          } else {
            console.log('   ❌ Deutsch Male voice not found');
          }
          
          console.log('   • Total voices available:', voices.length);
        } catch (error) {
          console.error('Error checking voices:', error);
        }
      } else {
        console.log('⚠️ ResponsiveVoice not available, using browser TTS fallback');
      }
    }, 1500); // Give ResponsiveVoice more time to load

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