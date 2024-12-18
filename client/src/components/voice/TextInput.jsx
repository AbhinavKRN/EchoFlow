import React from 'react';
import { MAX_TEXT_LENGTH } from '../../config/constants';

const TextInput = ({ value, onChange, disabled = false }) => {
  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_TEXT_LENGTH) {
      onChange(text);
    }
  };

  const charCount = value.length;
  const isNearLimit = charCount > MAX_TEXT_LENGTH * 0.8;
  const isAtLimit = charCount === MAX_TEXT_LENGTH;

  return (
    <div className="space-y-2">
      <label 
        htmlFor="voice-text" 
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Enter Text to Convert
      </label>
      
      <textarea
        id="voice-text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder="Enter the text you want to convert to speech..."
        className={`
          w-full min-h-[100px] p-3 rounded-lg border 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isAtLimit ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
        `}
      />
      
      <div className="flex justify-end">
        <span className={`text-sm ${
          isNearLimit 
            ? isAtLimit 
              ? 'text-red-600 dark:text-red-400' 
              : 'text-yellow-600 dark:text-yellow-400'
            : 'text-gray-500 dark:text-gray-400'
        }`}>
          {charCount}/{MAX_TEXT_LENGTH} characters
        </span>
      </div>
    </div>
  );
};

export default TextInput;