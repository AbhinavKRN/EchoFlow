import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export const processVoice = async (voicePath, text) => {
  try {
    const { data } = await api.post('/api/voice/process', {
      voicePath,
      text
    });
    
    if (!data.success) {
      throw new Error(data.error || 'Processing failed');
    }
    
    return data.data;
  } catch (error) {
    console.error('Voice processing error:', error);
    throw new Error(error.response?.data?.message || 'Voice processing failed');
  }
};