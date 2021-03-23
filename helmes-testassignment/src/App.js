import React from 'react';
import './App.css';
import { NewLetterModal } from './components/LettersModal';
import { LettersTable } from './components/LettersTable';



function App() {
  return (
    <div className="App">
      <h3>Orders</h3>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <div style={{ textAlign: 'right' }}>
          <NewLetterModal/>
        </div>
        <lettersTable/>
      </div>
    </div>
  );

}

export default App;
