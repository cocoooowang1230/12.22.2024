import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Puzzle } from './pages/Puzzle';
import { Quiz } from './pages/Quiz';
import { Treasure } from './pages/Treasure';
import { MusicProvider } from './context/MusicContext';

export const App: React.FC = () => {
  return (
    <MusicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/treasure" element={<Treasure />} />
        </Routes>
      </Router>
    </MusicProvider>
  );
};