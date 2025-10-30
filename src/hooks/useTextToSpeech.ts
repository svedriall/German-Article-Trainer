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
          .map(voice => ({ name: voice.name, lang: voice.lang })),
        allVoices: voices.map(voice => `${voice.name} (${voice.lang})`)
      });
      
      // If no German voices found, show user-friendly message
      if (!germanVoice && voices.length > 0) {
        console.warn('⚠️ No German TTS voices available on this system.');
        console.info('💡 To get German pronunciation:');
        console.info('   • Windows: Install German language pack in Settings > Time & Language > Language');
        console.info('   • Chrome: Visit chrome://settings/languages and add German');
        console.info('   • Edge: Visit edge://settings/languages and add German');
        console.info('   • Using de-DE language setting as fallback');
      }
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
      // Try to find any voice that might work better with German
      const allVoices = window.speechSynthesis.getVoices();
      const englishVoice = allVoices.find(voice => 
        voice.lang.startsWith('en') && !voice.name.toLowerCase().includes('male')
      );
      
      if (englishVoice) {
        // Use a female English voice as it often pronounces German better
        utterance.voice = englishVoice;
        console.log(`🔄 Using fallback voice for German: ${englishVoice.name} (${englishVoice.lang})`);
      }
      
      console.warn("🚨 No German voice available. Using language setting de-DE with fallback voice.");
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