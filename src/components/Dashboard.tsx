import './Dashboard.css';

const stats = [
  { label: 'Balance', value: '$2450', icon: '$', color: '#22c55e' },
  { label: 'Rank', value: '#3', icon: '📈', color: '#3b82f6' },
  { label: 'Active Bets', value: '3', icon: '⏰', color: '#f59e42' },
  { label: 'Win Rate', value: '73%', icon: '✔️', color: '#22c55e' },
];

const bets = [
  {
    title: 'Complete 30-day fitness challenge',
    subtitle: 'Betting for Alex',
    amount: 50,
    progress: 60,
    daysLeft: 12,
    color: '#11111a',
  },
  {
    title: 'Read 5 books this month',
    subtitle: 'Betting against Sarah',
    amount: 75,
    progress: 40,
    daysLeft: 8,
    color: '#e11d48',
  },
  {
    title: 'Learn Spanish basics',
    subtitle: 'Betting for Mike',
    amount: 100,
    progress: 80,
    daysLeft: 20,
    color: '#11111a',
  },
];

const Dashboard = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Here's your productivity betting overview</p>
      </div>
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="dashboard-stat-card" key={stat.label}>
            <div className="dashboard-stat-top">
              <div className="dashboard-stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
              <div className="dashboard-stat-label">{stat.label}</div>
            </div>
            <div className="dashboard-stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="dashboard-current-bets">
        <h2>Current Bets</h2>
        {bets.map((bet) => (
          <div className="dashboard-bet-card" key={bet.title}>
            <div className="dashboard-bet-header">
              <div>
                <div className="dashboard-bet-title">{bet.title}</div>
                <div className="dashboard-bet-subtitle">{bet.subtitle}</div>
              </div>
              <div className="dashboard-bet-amount" style={{ background: bet.color }}>
                ${bet.amount}
              </div>
            </div>
            <div className="dashboard-bet-progress-label">Progress</div>
            <div className="dashboard-bet-progress-bar">
              <div
                className="dashboard-bet-progress-bar-inner"
                style={{ width: `${bet.progress}%`, background: bet.color }}
              ></div>
            </div>
            <div className="dashboard-bet-progress-footer">
              <span>{bet.daysLeft} days left</span>
              <span>{bet.progress}%</span>
            </div>
          </div>
        ))}
        <button className="dashboard-view-all">View All Bets</button>
      </div>
    </main>
  );
};

export default Dashboard; 