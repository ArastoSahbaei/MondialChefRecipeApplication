import React from 'react';
import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { UserProvider } from './utils/context/UserContext'
import './utils/design/Global.css'

function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;
