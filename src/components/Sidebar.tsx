import { FaHome, FaBullseye, FaChartLine, FaTrophy, FaPlus, FaUser } from 'react-icons/fa';
import './Sidebar.css';

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  { label: 'Dashboard', icon: <FaHome /> },
  { label: 'Betting Room', icon: <FaBullseye /> },
  { label: 'Activity Feed', icon: <FaChartLine /> },
  { label: 'Leaderboard', icon: <FaTrophy /> },
  { label: 'My Goals', icon: <FaPlus /> },
  { label: 'Profile', icon: <FaUser /> },
];

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>
          <span style={{ color: '#22c55e', fontWeight: 700 }}>Bet</span>
          You
          <span style={{ color: '#e11d48', fontWeight: 700 }}>Can't</span>!
        </h2>
        <div className="sidebar-balance-rank">
          <div className="sidebar-balance">
            <span>Balance</span>
            <span className="sidebar-balance-value">$2450</span>
          </div>
          <div className="sidebar-rank">
            <span>Rank</span>
            <span className="sidebar-rank-value">#3</span>
          </div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.label}
              className={
                `${tab.label === 'Dashboard' ? 'dashboard' : ''}` +
                `${tab.label === 'Betting Room' ? 'betting-room' : ''}` +
                `${tab.label === 'Activity Feed' ? 'activity-feed' : ''}` +
                `${tab.label === 'Leaderboard' ? 'leaderboard' : ''}` +
                `${tab.label === 'My Goals' ? 'my-goals' : ''}` +
                `${tab.label === 'Profile' ? 'profile' : ''}` +
                (activeTab === tab.label ? ' active' : '')
              }
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.icon} {tab.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 