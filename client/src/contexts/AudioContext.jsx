import React, { createContext, useContext, useState, useCallback } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audioFile, setAudioFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [outputUrl, setOutputUrl] = useState(null);

  const resetAudioState = useCallback(() => {
    setAudioFile(null);
    setIsProcessing(false);
    setError(null);
    setOutputUrl(null);
  }, []);

  const value = {
    audioFile,
    setAudioFile,
    isProcessing,
    setIsProcessing,
    error,
    setError,
    outputUrl,
    setOutputUrl,
    resetAudioState
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

