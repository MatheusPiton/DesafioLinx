import React from 'react';
import api from './services/api';
import './styles.css';
import Main from './pages/main';
import Routes from './router';

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
