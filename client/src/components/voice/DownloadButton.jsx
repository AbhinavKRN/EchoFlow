import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Button from '../common/Button';

const DownloadButton = ({ url }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `generated-voice-${Date.now()}.wav`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download file. Please try again.');
    }
  };

  return (
    <div className="mt-4">
      <Button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2"
        variant="primary"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />
        Download Generated Voice
      </Button>
    </div>
  );
};

export default DownloadButton;