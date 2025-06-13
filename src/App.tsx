import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BettingRoom from './components/BettingRoom';
import Leaderboard from './components/Leaderboard';
import MyGoals from './components/MyGoals';
import Profile from './components/Profile';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import JoinGroup from './pages/JoinGroup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1, padding: 0, marginLeft: 40 }}>
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route
          path="/betting"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1, padding: 0, marginLeft: 24 }}>
                <BettingRoom />
              </div>
            </div>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1, padding: 0, marginLeft: 24 }}>
                <Leaderboard />
              </div>
            </div>
          }
        />
        <Route
          path="/goals"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1, padding: 0, marginLeft: 24 }}>
                <MyGoals />
              </div>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1, padding: 0, marginLeft: 24 }}>
                <Profile />
              </div>
            </div>
          }
        />
        <Route path="/join-group" element={<JoinGroup />} />

        {/* Redirect any unknown routes to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 