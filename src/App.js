import React from 'react';
import './App.css';
import News from './Components/News/News.js';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline.js';
import Fragment from './Components/Fragment/Fragment';

function App() {
  return (
    <div>
      <h3>React Bootstrap and Material UI</h3>
      <Header />
      <Fragment />
      <TopHeadline />

    </div>
  );
}

export default App;
