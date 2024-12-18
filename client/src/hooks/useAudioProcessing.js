import { useState, useCallback } from 'react';
import { processVoice } from '../services/api';
import { useSupabaseStorage } from './useSupabaseStorage';
import { ERROR_MESSAGES } from '../config/constants';

export const useAudioProcessing = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [outputUrl, setOutputUrl] = useState(null);
  const { uploadFile, getPublicUrl } = useSupabaseStorage();

  const processAudio = useCallback(async (voiceFile, text) => {
    try {
      setIsProcessing(true);
      setError(null);

      // Upload the voice file
      const { path } = await uploadFile(voiceFile);
      
      // Process the voice
      const { outputPath } = await processVoice(path, text);
      
      // Get the public URL for the processed file
      const url = await getPublicUrl(outputPath);
      
      setOutputUrl(url);
    } catch (err) {
      setError(err.message || ERROR_MESSAGES.PROCESSING_FAILED);
    } finally {
      setIsProcessing(false);
    }
  }, [uploadFile, getPublicUrl]);

  return {
    processAudio,
    isProcessing,
    error,
    outputUrl,
    resetState: () => {
      setError(null);
      setOutputUrl(null);
    }
  };
};
