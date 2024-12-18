export const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  export const createWaveform = (audioBuffer) => {
    const data = audioBuffer.getChannelData(0);
    const samples = 100;
    const blockSize = Math.floor(data.length / samples);
    const waveform = [];
  
    for (let i = 0; i < samples; i++) {
      const start = blockSize * i;
      let sum = 0;
      for (let j = 0; j < blockSize; j++) {
        sum += Math.abs(data[start + j]);
      }
      waveform.push(sum / blockSize);
    }
  
    return waveform;
  };