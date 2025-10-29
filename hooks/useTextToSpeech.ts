
import { useState, useCallback } from 'react';
import { getTextToSpeech } from '../services/geminiService';

// Decoder functions must be implemented as per guidelines
const decode = (base64: string): Uint8Array => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

const decodeAudioData = async (
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> => {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
};


export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const speak = useCallback(async (text: string) => {
    if (isLoading || isPlaying) return;

    setIsLoading(true);
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    
    try {
      const base64Audio = await getTextToSpeech(text);
      if (!base64Audio) {
        throw new Error("No audio data received.");
      }

      const decodedData = decode(base64Audio);
      const audioBuffer = await decodeAudioData(decodedData, audioContext, 24000, 1);
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      
      source.onended = () => {
        setIsPlaying(false);
        audioContext.close();
      };
      
      source.start(0);
      setIsPlaying(true);
    } catch (error) {
      console.error("Failed to play audio:", error);
      alert("Could not play audio. Please ensure your API key is set up correctly.");
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, isPlaying]);

  return { speak, isPlaying, isLoading };
};
