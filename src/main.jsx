import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { PromotionalBar } from './components/PromotionalBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Navbar />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
);
