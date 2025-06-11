import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BettingRoom from './pages/BettingRoom';
import Leaderboard from './pages/Leaderboard';
import MyGoals from './pages/MyGoals';
import Profile from './components/Profile';
import Landing from './pages/Landing';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar onNewGoal={() => {}} />
              <div className="flex-1 ml-64">
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route
          path="/betting"
          element={
            <div className="flex">
              <Sidebar onNewGoal={() => {}} />
              <div className="flex-1 ml-64">
                <BettingRoom />
              </div>
            </div>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <div className="flex">
              <Sidebar onNewGoal={() => {}} />
              <div className="flex-1 ml-64">
                <Leaderboard />
              </div>
            </div>
          }
        />
        <Route
          path="/goals"
          element={
            <div className="flex">
              <Sidebar onNewGoal={() => {}} />
              <div className="flex-1 ml-64">
                <MyGoals />
              </div>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="flex">
              <Sidebar onNewGoal={() => {}} />
              <div className="flex-1 ml-64">
                <Profile />
              </div>
            </div>
          }
        />

        {/* Redirect any unknown routes to landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 