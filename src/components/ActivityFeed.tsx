import './ActivityFeed.css';
import { useState } from 'react';
import { FaCheckCircle, FaArrowDown, FaArrowUp, FaExclamationTriangle, FaTrophy, FaRegClock, FaCommentDots } from 'react-icons/fa';

const filters = ['All', 'Completed', 'Bets', 'Disputes', 'Wins', 'New Goals'];

const activities = [
  {
    user: 'Emma',
    userInitial: 'E',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'completed',
    icon: <span style={{ color: '#22c55e' }}><FaCheckCircle /></span>,
    message: <><b>Emma</b> completed her marathon training goal!</>,
    time: '2 minutes ago',
    timeColor: '#22c55e',
    amount: 225,
  },
  {
    user: 'David',
    userInitial: 'D',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'bet-against',
    icon: <span style={{ color: '#e11d48' }}><FaArrowDown /></span>,
    message: <><b>David</b> bet $75 against Lisa's reading challenge</>,
    time: '15 minutes ago',
    timeColor: '#22c55e',
    amount: 75,
  },
  {
    user: 'Jordan',
    userInitial: 'J',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'new-goal',
    icon: <span style={{ color: '#3b82f6' }}><FaRegClock /></span>,
    message: <><b>Jordan</b> created a new goal: "Master 10 piano songs"</>,
    time: '1 hour ago',
    timeColor: '#a1a1aa',
  },
  {
    user: 'Mike',
    userInitial: 'M',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'dispute',
    icon: <span style={{ color: '#fbbf24' }}><FaExclamationTriangle /></span>,
    message: <><b>Mike</b> accused Sarah of cheating on her coding goal</>,
    time: '2 hours ago',
    timeColor: '#a1a1aa',
  },
  {
    user: 'Alex',
    userInitial: 'A',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'win',
    icon: <span style={{ color: '#fbbf24' }}><FaTrophy /></span>,
    message: <><b>Alex</b> won $150 on Emma's fitness goal!</>,
    time: '2 hours ago',
    timeColor: '#a1a1aa',
    amount: 150,
  },
  {
    user: 'Lisa',
    userInitial: 'L',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'bet-for',
    icon: <span style={{ color: '#22c55e' }}><FaArrowUp /></span>,
    message: <><b>Lisa</b> bet $100 for Jordan's piano challenge</>,
    time: '5 hours ago',
    timeColor: '#a1a1aa',
    amount: 100,
  },
  {
    user: 'David',
    userInitial: 'D',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'proof',
    icon: <span style={{ color: '#3b82f6' }}><FaCommentDots /></span>,
    message: <><b>David</b> submitted proof for his website launch</>,
    time: '6 hours ago',
    timeColor: '#a1a1aa',
  },
  {
    user: 'Emma',
    userInitial: 'E',
    userColor: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)',
    type: 'progress',
    icon: <span style={{ color: '#22c55e' }}><FaArrowUp /></span>,
    message: <><b>Emma</b> updated progress to 75% on her marathon training goal</>,
    time: '5 minutes ago',
    timeColor: '#22c55e',
    progress: 75,
    goal: 'Complete marathon training',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    proofStatus: 'progress',
  },
];

const summary = [
  { label: 'Goals Completed', value: 5, color: '#22c55e' },
  { label: 'New Bets', value: 12, color: '#3b82f6' },
  { label: 'Money Won', value: '$1,250', color: '#fbbf24' },
  { label: 'New Goals', value: 3, color: '#a78bfa' },
];

const filterMap: Record<string, string[]> = {
  'All': [],
  'Completed': ['completed'],
  'Bets': ['bet-for', 'bet-against'],
  'Disputes': ['dispute'],
  'Wins': ['win'],
  'New Goals': ['new-goal'],
};

const ActivityFeed = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredActivities =
    activeFilter === 'All'
      ? activities
      : activities.filter((a) => filterMap[activeFilter].includes(a.type));

  return (
    <main className="activity-feed-main">
      <div className="activity-feed-header">
        <h1>Activity Feed</h1>
        <p>Stay updated on your friends' progress and betting activity</p>
      </div>
      <div className="activity-feed-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`activity-feed-filter${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="activity-feed-list">
        {filteredActivities.map((a, i) => (
          <div className="activity-feed-card" key={i}>
            <div className="activity-feed-card-left">
              <div className="activity-feed-avatar" style={{ background: a.userColor }}>{a.userInitial}</div>
            </div>
            <div className="activity-feed-card-center">
              <div className="activity-feed-card-message">{a.icon} {a.message}</div>
              <div className="activity-feed-card-time" style={{ color: a.timeColor }}>{a.time}</div>
              {a.type === 'progress' && (
                <>
                  <div style={{ margin: '8px 0 0 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ background: '#f3f4f6', color: '#222', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 14 }}>Goal: {a.goal}</span>
                    <span style={{ background: '#f3f4f6', color: '#222', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 14, marginLeft: 'auto' }}>{a.progress}%</span>
                  </div>
                  {a.photo && (
                    <div style={{ marginTop: 10, marginBottom: 10, position: 'relative', width: 180 }}>
                      <img src={a.photo} alt="proof" style={{ width: 180, height: 120, borderRadius: 12, objectFit: 'cover' }} />
                      <button style={{ position: 'absolute', bottom: 8, right: 8, background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 8, padding: '4px 14px', fontWeight: 500, fontSize: 15, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M2.05 13A10 10 0 1 0 12 2v0"/></svg> View
                      </button>
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: 10, marginTop: 2 }}>
                    <button style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 8, fontWeight: 500, fontSize: 15, color: '#e11d48', padding: '7px 18px', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                      <span style={{ color: '#e11d48' }}><FaExclamationTriangle /></span> Dispute
                    </button>
                  </div>
                </>
              )}
            </div>
            {a.amount && (
              <div className="activity-feed-card-amount">
                <span className="activity-feed-card-amount-icon">$</span> {a.amount}
              </div>
            )}
          </div>
        ))}
        <button className="activity-feed-load-more">Load More Activity</button>
      </div>
      <div className="activity-feed-summary">
        <h2>Today's Activity Summary</h2>
        <div className="activity-feed-summary-row">
          {summary.map((s) => (
            <div className="activity-feed-summary-item" key={s.label}>
              <div className="activity-feed-summary-value" style={{ color: s.color }}>{s.value}</div>
              <div className="activity-feed-summary-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActivityFeed; 