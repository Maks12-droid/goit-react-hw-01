import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ви маєте імпортувати компоненту App, а не CSS файл

import 'modern-normalize/modern-normalize.css';
import '../src/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
