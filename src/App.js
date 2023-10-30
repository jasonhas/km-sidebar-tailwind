import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Pages from './pages/Pages';
import ProfilePage from './pages/ProfilePage';
import Documents from './components/DocumentsSearch';

function App() {

  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/pages" element={<Pages/>}/>
            <Route path="/profilepage" element={<ProfilePage/>}/>
            <Route path="/documents" element={<Documents/>}/>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
