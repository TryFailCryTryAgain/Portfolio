import AppRoutes from './routes';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
