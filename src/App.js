import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
