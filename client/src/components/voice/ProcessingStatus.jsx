import React from 'react';
import LoadingSpinner from '../common/LoadingSpinner';

const ProcessingStatus = ({ isProcessing }) => {
  if (!isProcessing) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
      <LoadingSpinner size="sm" />
      <p className="text-blue-700 dark:text-blue-300 font-medium">
        Processing your voice... This may take a few moments.
      </p>
    </div>
  );
};

export default ProcessingStatus;