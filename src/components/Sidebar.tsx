import { FaHome, FaBullseye, FaChartLine, FaTrophy, FaPlus, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

type SidebarProps = {
  onNewGoal: () => void;
};

const Sidebar = ({ onNewGoal }: SidebarProps) => {
  const navItems = [
    { icon: <FaHome />, label: 'Dashboard', path: '/' },
    { icon: <FaBullseye />, label: 'Betting Room', path: '/betting' },
    { icon: <FaChartLine />, label: 'Leaderboard', path: '/leaderboard' },
    { icon: <FaTrophy />, label: 'My Goals', path: '/goals' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          <span className="text-green-600">Bet</span>
          <span className="text-red-600">YouCan't!</span>
        </h1>
      </div>
      <nav className="px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-red-50 text-red-600'
                    : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                }`
              }
            >
              <span className="text-lg"><FaUser /></span>
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 