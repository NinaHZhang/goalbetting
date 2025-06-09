import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BettingRoom from './components/BettingRoom';
import ActivityFeed from './components/ActivityFeed';
import Leaderboard from './components/Leaderboard';
import MyGoals from './components/MyGoals';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Betting Room' ? (
        <BettingRoom />
      ) : activeTab === 'Activity Feed' ? (
        <ActivityFeed />
      ) : activeTab === 'Leaderboard' ? (
        <Leaderboard />
      ) : activeTab === 'My Goals' ? (
        <MyGoals />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App; 