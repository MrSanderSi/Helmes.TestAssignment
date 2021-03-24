import React from 'react';
import './App.css';
import { NewLetterModal } from './components/LettersModal';
import { LettersTable } from './components/LettersTable';
import { NewParcelModal } from './components/ParcelsModal';
import { ParcelsTable } from './components/ParcelsTable';



function App() {
  return (
    <div className="App">
      <h3>Orders</h3>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <NewLetterModal />
        </div>
        <div style={{ textAlign: 'center'}}>
          <NewParcelModal />
        </div>
        <div style={{textAlign: 'center'}}>
          <LettersTable />
          <ParcelsTable />
        </div>
        
      </div>
    </div>
  );

}

export default App;
