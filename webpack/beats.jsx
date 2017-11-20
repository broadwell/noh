import React from 'react';
import { render } from 'react-dom';
import BeatsEditor from './components/BeatsEditor';

const App = () => (
  <div className="app">
    <BeatsEditor
      filename="beats.json"
      grid={16}
    />
  </div>
);

render(<App />, document.getElementById('hello'));
