import React from 'react';

import BestPractice from './containers/BestPractice';
import Faqs from './containers/Faqs';
import Hero from './containers/Hero';
import Resources from './containers/Resources';
import Results from './containers/Results';
import TestYourself from './containers/TestYourself';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <Results />
      <BestPractice />
      <TestYourself />
      <Faqs />
      <Resources />
    </div>
  );
}

export default App;
