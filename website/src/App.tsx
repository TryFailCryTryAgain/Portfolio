import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AppRoutes from './routes';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
