import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AudioProvider } from './contexts/AudioContext';
import { Navbar, Footer, Container } from './components';
import VoiceCloneSection from './components/voice/VoiceCloneSection';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <Toaster position="top-right" />
          <Navbar />
          
          <main className="flex-grow">
            <Container>
              <div className="py-8">
                <VoiceCloneSection />
              </div>
            </Container>
          </main>

          <Footer />
        </div>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;