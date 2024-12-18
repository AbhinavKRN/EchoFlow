import React, { useState } from 'react';
import VoiceUploader from './VoiceUploader';
import TextInput from './TextInput';
import ProcessingStatus from './ProcessingStatus';
import DownloadButton from './DownloadButton';
import { useAudioProcessing } from '../../hooks/useAudioProcessing';

const VoiceCloneSection = () => {
  const [voiceFile, setVoiceFile] = useState(null);
  const [text, setText] = useState('');
  const { processAudio, isProcessing, error, outputUrl } = useAudioProcessing();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (voiceFile && text) {
      await processAudio(voiceFile, text);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Clone a Voice</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <VoiceUploader
            onFileSelect={setVoiceFile}
            selectedFile={voiceFile}
            disabled={isProcessing}
          />

          <TextInput
            value={text}
            onChange={setText}
            disabled={isProcessing}
          />

          <button
            type="submit"
            disabled={!voiceFile || !text || isProcessing}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg 
                     hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Generate Voice'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {isProcessing && <ProcessingStatus />}
        
        {outputUrl && <DownloadButton url={outputUrl} />}
      </div>
    </div>
  );
};

export default VoiceCloneSection;