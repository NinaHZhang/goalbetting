import './BettingRoom.css';
import { useState } from 'react';
import { FaUser, FaClock, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const goals = [
  {
    title: 'Complete marathon training',
    user: 'Emma',
    description: 'Run 26.2 miles without stopping',
    daysLeft: 12,
    forAmount: 150,
    againstAmount: 75,
    bettors: 8,
    difficulty: 'Hard',
    difficultyColor: '#f87171',
    difficultyBg: '#fee2e2',
  },
  {
    title: 'Launch personal website',
    user: 'David',
    description: 'Design and deploy a portfolio website',
    daysLeft: 5,
    forAmount: 200,
    againstAmount: 50,
    bettors: 12,
    difficulty: 'Medium',
    difficultyColor: '#facc15',
    difficultyBg: '#fef9c3',
  },
  {
    title: 'Read 10 non-fiction books',
    user: 'Lisa',
    description: 'Complete reading 10 books and write reviews',
    daysLeft: 28,
    forAmount: 100,
    againstAmount: 125,
    bettors: 6,
    difficulty: 'Medium',
    difficultyColor: '#facc15',
    difficultyBg: '#fef9c3',
  },
];

function BetModal({ goal, onClose }: { goal: typeof goals[0], onClose: () => void }) {
  const [betType, setBetType] = useState<'for' | 'against'>('for');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  return (
    <div className="bet-modal-backdrop">
      <div className="bet-modal">
        <button className="bet-modal-close" onClick={onClose}>&times;</button>
        <h2>Place Your Bet</h2>
        <div className="bet-modal-title">{goal.title}</div>
        <div className="bet-modal-user">by {goal.user}</div>
        <div className="bet-modal-section">Bet Type</div>
        <div className="bet-modal-type-row">
          <button
            className={`bet-modal-type-btn${betType === 'for' ? ' active bet-for' : ''}`}
            onClick={() => setBetType('for')}
          >
            <span style={{ marginRight: 8 }}><FaArrowUp /></span> Bet For
          </button>
          <button
            className={`bet-modal-type-btn${betType === 'against' ? ' active bet-against' : ''}`}
            onClick={() => setBetType('against')}
          >
            <span style={{ marginRight: 8 }}><FaArrowDown /></span> Bet Against
          </button>
        </div>
        <div className="bet-modal-section">Amount ($)</div>
        <input
          className="bet-modal-input"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <div className="bet-modal-section">Add a Note (Optional)</div>
        <textarea
          className="bet-modal-input"
          placeholder="Add an encouraging message, neutral comment, or challenge..."
          value={note}
          onChange={e => setNote(e.target.value)}
          style={{ minHeight: 48 }}
        />
        <div className="bet-modal-actions">
          <button className="bet-modal-confirm">Confirm Bet</button>
          <button className="bet-modal-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const BettingRoom = () => {
  const [modalGoal, setModalGoal] = useState<null | typeof goals[0]>(null);
  return (
    <main className="betting-room-main">
      <div className="betting-room-header">
        <h1>Betting Room</h1>
        <p>Place your bets on your friends' goals</p>
      </div>
      {goals.map((goal) => (
        <div className="betting-room-card" key={goal.title}>
          <div className="betting-room-card-header">
            <div>
              <div className="betting-room-card-title">{goal.title}</div>
              <div className="betting-room-card-user"><FaUser /> by {goal.user}</div>
              <div className="betting-room-card-desc">{goal.description}</div>
            </div>
            <div className="betting-room-card-difficulty" style={{ background: goal.difficultyBg, color: goal.difficultyColor }}>
              {goal.difficulty}
            </div>
          </div>
          <div className="betting-room-card-info">
            <div className="betting-room-card-days"><FaClock /> {goal.daysLeft} days left</div>
            <div className="betting-room-card-bettors">{goal.bettors} bettors</div>
          </div>
          <div className="betting-room-card-bets">
            <span className="betting-room-card-for"><span style={{ color: '#22c55e', marginRight: 4 }}><FaArrowUp /></span>For: <span style={{ color: '#22c55e' }}>${goal.forAmount}</span></span>
            <span className="betting-room-card-against"><span style={{ color: '#e11d48', marginRight: 4 }}><FaArrowDown /></span>Against: <span style={{ color: '#e11d48' }}>${goal.againstAmount}</span></span>
          </div>
          <button className="betting-room-card-btn" onClick={() => setModalGoal(goal)}>Place Bet</button>
        </div>
      ))}
      {modalGoal && <BetModal goal={modalGoal} onClose={() => setModalGoal(null)} />}
    </main>
  );
};

export default BettingRoom; 