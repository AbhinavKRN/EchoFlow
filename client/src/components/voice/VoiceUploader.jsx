import React, { useRef, useState } from 'react';
import { CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { validateVoiceFile } from '../../utils/fileValidation';
import Button from '../common/Button';

const VoiceUploader = ({ onFileSelect, selectedFile, disabled = false }) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const file = e.dataTransfer.files?.[0];
    if (file) validateAndSelectFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) validateAndSelectFile(file);
  };

  const validateAndSelectFile = (file) => {
    const validation = validateVoiceFile(file);
    if (!validation.isValid) {
      alert(validation.errors.join('\n'));
      return;
    }
    onFileSelect(file);
  };

  const removeFile = () => {
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Upload Voice Sample
      </label>
      
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-6 transition-colors
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${dragActive ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}
          ${selectedFile 
            ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
            : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
          }
        `}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/wav,audio/mp3,audio/mpeg"
          onChange={handleFileChange}
          disabled={disabled}
          className="hidden"
        />
        
        <div className="space-y-2 text-center">
          <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
          
          {selectedFile ? (
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm text-gray-900 dark:text-gray-100">
                {selectedFile.name}
              </p>
              {!disabled && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  variant="danger"
                  className="p-1"
                >
                  <XMarkIcon className="w-4 h-4" />
                </Button>
              )}
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                WAV or MP3 up to 5MB
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceUploader;