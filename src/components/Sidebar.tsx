import { FaHome, FaBullseye, FaChartLine, FaTrophy, FaUser } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { icon: <FaHome />, label: 'Dashboard', path: '/dashboard', className: 'dashboard' },
  { icon: <FaBullseye />, label: 'Betting Room', path: '/betting', className: 'betting-room' },
  { icon: <FaChartLine />, label: 'Leaderboard', path: '/leaderboard', className: 'leaderboard' },
  { icon: <FaTrophy />, label: 'My Goals', path: '/goals', className: 'my-goals' },
  { icon: <FaUser />, label: 'Profile', path: '/profile', className: 'profile' },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 20px 0' }}>
          <span style={{ color: '#22c55e' }}>Bet</span>
          <span style={{ color: '#222' }}>You</span>
          <span style={{ color: '#e11d48' }}>Can't</span>
          <span style={{ color: '#222' }}>!</span>
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
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.path}
                className={item.className + (isActive ? ' active' : '')}
              >
                <NavLink to={item.path} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', height: '100%' }}>
                  {item.icon} {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 