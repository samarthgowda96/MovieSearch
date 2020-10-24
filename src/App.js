import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Title from './components/Title'
import Status from './components/Status'
import Movie from './components/Movie'

import TodoList from './components/TodoList'
import Fetch from './Fetch'

function App() {
  return (
    <div>
   <h1> Welcome to Movie Search:)</h1>
    <Movie/>
   </div>

  );
}



export default App;
