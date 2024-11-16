import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Getdata from './Components/Getdata';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <Getdata />
    </>
  </StrictMode>
);
