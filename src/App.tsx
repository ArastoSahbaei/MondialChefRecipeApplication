import React from 'react';
import Routing from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'

function App() {
  return (
    <Routing>
      <NavigationBar />
    </Routing>
  );
}

export default App;
