import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { useCountdown } from './hooks/useCountdown'; // Ensure correct path and file name
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
