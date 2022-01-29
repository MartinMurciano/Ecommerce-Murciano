import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './components/NavigationBar';
import ItemListContainer from './components/ItemListContainer';


ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <ItemListContainer name="Tutor" />
  </React.StrictMode>,
  document.getElementById('root')
);