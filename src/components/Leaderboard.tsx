import './Leaderboard.css';
import { useState } from 'react';
import { FaTrophy, FaCalendarAlt, FaArrowUp, FaArrowDown, FaMedal } from 'react-icons/fa';

const competition = {
  month: 'February 2025',
  winner: 'Dinner at favorite restaurant (paid by group)',
  loser: 'Buys coffee for everyone next month',
  daysLeft: 25,
  progress: 83,
  yourRank: 3,
};

const filters = ['Current Month', 'Last Month', 'All Time'];

const users = [
  {
    rank: 1,
    name: 'Emma Rodriguez',
    initials: 'ER',
    earned: 3250,
    winRate: 85,
    bets: 28,
    completed: 12,
    completedChange: 0,
    isYou: false,
  },
  {
    rank: 2,
    name: 'David Chen',
    initials: 'DC',
    earned: 2890,
    winRate: 78,
    bets: 32,
    completed: 8,
    completedChange: 1,
    isYou: false,
  },
  {
    rank: 3,
    name: 'You',
    initials: 'YU',
    earned: 2450,
    winRate: 73,
    bets: 15,
    completed: 6,
    completedChange: -1,
    isYou: true,
  },
  {
    rank: 4,
    name: 'Sarah Kim',
    initials: 'SK',
    earned: 2100,
    winRate: 68,
    bets: 22,
    completed: 9,
    completedChange: 2,
    isYou: false,
  },
  {
    rank: 5,
    name: 'Mike Johnson',
    initials: 'MJ',
    earned: 1980,
    winRate: 71,
    bets: 18,
    completed: 7,
    completedChange: -1,
    isYou: false,
  },
  {
    rank: 6,
    name: 'Lisa Wang',
    initials: 'LW',
    earned: 1750,
    winRate: 65,
    bets: 20,
    completed: 5,
    completedChange: 0,
    isYou: false,
  },
  {
    rank: 7,
    name: 'Jordan Smith',
    initials: 'JS',
    earned: 1600,
    winRate: 62,
    bets: 16,
    completed: 4,
    completedChange: 1,
    isYou: false,
  },
  {
    rank: 8,
    name: 'Alex Brown',
    initials: 'AB',
    earned: 1450,
    winRate: 69,
    bets: 14,
    completed: 6,
    completedChange: -2,
    isYou: false,
  },
];

const lastMonthWinner = {
  name: 'Sarah Kim',
  earned: 3450,
  winRate: 89,
  month: 'January 2025',
};

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState('Current Month');
  return (
    <main className="leaderboard-main">
      <div className="leaderboard-header-row">
        <h1>Leaderboard</h1>
        <div className="leaderboard-header-right">
          <FaCalendarAlt style={{ marginRight: 8, color: '#a1a1aa' }} />
          <span className="leaderboard-header-days">{competition.daysLeft} days left in competition</span>
        </div>
      </div>
      <p className="leaderboard-subtitle">Monthly competition rankings</p>
      <div className="leaderboard-competition-card">
        <div className="leaderboard-competition-left">
          <div className="leaderboard-competition-title">
            <FaTrophy style={{ color: '#fbbf24', marginRight: 10, fontSize: '1.3rem' }} />
            {competition.month} Competition
          </div>
          <div className="leaderboard-competition-details">
            <b>Winner:</b> {competition.winner}<br />
            <b>Last Place:</b> {competition.loser}
          </div>
          <div className="leaderboard-competition-progress-bar">
            <div className="leaderboard-competition-progress-bar-inner" style={{ width: `${competition.progress}%` }}></div>
          </div>
          <div className="leaderboard-competition-progress-label">
            Competition Progress: {competition.progress}% complete
          </div>
        </div>
        <div className="leaderboard-competition-right">
          <div className="leaderboard-competition-rank">#{competition.yourRank}</div>
          <div className="leaderboard-competition-rank-label">Your Rank</div>
        </div>
      </div>
      <div className="leaderboard-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`leaderboard-filter${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      {activeFilter === 'Last Month' ? (
        <div className="leaderboard-winner-card">
          <FaTrophy className="leaderboard-winner-trophy" />
          <div className="leaderboard-winner-month">{lastMonthWinner.month} Winner</div>
          <div className="leaderboard-winner-name">{lastMonthWinner.name}</div>
          <div className="leaderboard-winner-meta">
            Earned ${lastMonthWinner.earned} &bull; {lastMonthWinner.winRate}% win rate
          </div>
          <button className="leaderboard-winner-results">View Full Results</button>
        </div>
      ) : (
        <div className="leaderboard-list">
          {users.map((u) => (
            <div className={`leaderboard-user-card${u.isYou ? ' you' : ''}`} key={u.rank}>
              <div className="leaderboard-user-rank">
                {u.rank === 1 ? <FaTrophy style={{ color: '#fbbf24', fontSize: '1.1rem' }} /> :
                 u.rank === 2 ? <FaMedal style={{ color: '#a1a1aa', fontSize: '1.1rem' }} /> :
                 u.rank === 3 ? <FaMedal style={{ color: '#c9a14a', fontSize: '1.1rem' }} /> :
                 `#${u.rank}`}
              </div>
              <div className="leaderboard-user-avatar" style={{ background: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)' }}>{u.initials}</div>
              <div className="leaderboard-user-info">
                <div className="leaderboard-user-name">{u.name}</div>
                <div className="leaderboard-user-meta">
                  ${u.earned} earned &nbsp; {u.winRate}% win rate &nbsp; {u.bets} bets
                </div>
              </div>
              <div className="leaderboard-user-completed">
                <span className="leaderboard-user-completed-badge{u.isYou ? ' you' : ''}">{u.completed} completed</span>
                {u.completedChange !== 0 && (
                  <span className={`leaderboard-user-completed-change${u.completedChange > 0 ? ' up' : ' down'}`}>
                    {u.completedChange > 0 ? <FaArrowUp style={{ color: '#22c55e' }} /> : <FaArrowDown style={{ color: '#e11d48' }} />} {Math.abs(u.completedChange)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Leaderboard; 