import './MyGoals.css';
import { FaPlus, FaClock, FaBullseye, FaUsers } from 'react-icons/fa';
import { useState, useRef } from 'react';

const filters = ['Active Goals', 'Completed', 'All Goals'];

const goals = [
  {
    title: 'Complete 30-day yoga challenge',
    desc: 'Practice yoga for 30 minutes daily',
    progress: 60,
    daysLeft: 18,
    forAmount: 150,
    againstAmount: 75,
    bettors: 8,
    difficulty: 'Medium',
    difficultyColor: '#facc15',
    difficultyBg: '#fef9c3',
    status: 'active',
    statusColor: '#3b82f6',
    statusBg: '#e0e7ff',
  },
  {
    title: 'Learn Spanish basics',
    desc: 'Complete beginner Spanish course and have 10-minute conversation',
    progress: 25,
    daysLeft: 32,
    forAmount: 200,
    againstAmount: 100,
    bettors: 12,
    difficulty: 'Hard',
    difficultyColor: '#e11d48',
    difficultyBg: '#fee2e2',
    status: 'active',
    statusColor: '#3b82f6',
    statusBg: '#e0e7ff',
  },
  {
    title: 'Daily meditation streak',
    desc: 'Meditate for 15 minutes every day for 21 days',
    progress: 85,
    daysLeft: 5,
    forAmount: 80,
    againstAmount: 40,
    bettors: 6,
    difficulty: 'Easy',
    difficultyColor: '#4ade80',
    difficultyBg: '#dcfce7',
    status: 'active',
    statusColor: '#3b82f6',
    statusBg: '#e0e7ff',
  },
];

const demoUpdates = [
  {
    progress: 60,
    note: 'Completed week 2 of yoga challenge. Feeling more flexible!',
    date: '2025-02-19',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    status: 'Verified',
    statusColor: '#22c55e',
    statusBg: '#e0fce7',
  },
  {
    progress: 40,
    note: 'Week 1 complete. Starting to build the habit.',
    date: '2025-02-14',
    image: null,
    status: 'Verified',
    statusColor: '#22c55e',
    statusBg: '#e0fce7',
  },
  {
    progress: 20,
    note: 'First few days done. Taking progress photos.',
    date: '2025-02-09',
    image: null,
    status: 'Disputed',
    statusColor: '#e11d48',
    statusBg: '#fee2e2',
    dispute: 'Photo appears to be stock image',
  },
];

const demoBettors = {
  for: [
    { name: 'Emma', initials: 'EM', date: '2/14/2025', amount: 50, note: "You've got this! I've seen your dedication and know you'll crush this challenge! 💪", level: 'High', levelColor: '#22c55e' },
    { name: 'David', initials: 'DA', date: '2/15/2025', amount: 75, note: "Yoga is tough but you're tougher. Betting on your willpower!", level: 'Medium', levelColor: '#facc15' },
    { name: 'Lisa', initials: 'LI', date: '2/16/2025', amount: 25, note: 'Rooting for you!', level: 'Low', levelColor: '#a78bfa' },
  ],
  against: [
    { name: 'Mike', initials: 'MI', date: '2/16/2025', amount: 40, note: '30 days is a long time... most people quit after week 2. Prove me wrong!', level: 'Medium', levelColor: '#facc15' },
    { name: 'Sarah', initials: 'SA', date: '2/18/2025', amount: 35, note: 'I remember your last fitness attempt... 😬', level: 'Low', levelColor: '#e11d48' },
  ]
};

const CreateGoalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [deadline, setDeadline] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle creating the goal
    onClose();
  };

  return (
    <div className="bet-modal-backdrop">
      <div className="bet-modal">
        <button className="bet-modal-close" onClick={onClose}>&times;</button>
        <h2>Create New Goal</h2>
        <form onSubmit={handleSubmit}>
          <div className="bet-modal-section">Goal Title</div>
          <input
            className="bet-modal-input"
            type="text"
            placeholder="What do you want to achieve?"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div className="bet-modal-section">Description</div>
          <textarea
            className="bet-modal-input"
            placeholder="Describe your goal in detail..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ minHeight: 60 }}
          />
          <div>
            <div className="bet-modal-section">Difficulty</div>
            <select
              className="bet-modal-input"
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
              required
            >
              <option value="">Select difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="bet-modal-section">Deadline</div>
          <input
            type="date"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
            className="bet-modal-input"
            required
          />
          <div className="bet-modal-actions">
            <button className="bet-modal-confirm" type="submit">Create Goal</button>
            <button className="bet-modal-cancel" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const UpdateProgressModal = ({ isOpen, onClose, goal }: { isOpen: boolean; onClose: () => void; goal: any }) => {
  const [progress, setProgress] = useState(goal?.progress || 0);
  const [isComplete, setIsComplete] = useState(false);
  const [note, setNote] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !goal) return null;

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setProgress(value);
    if (value === 100) setIsComplete(true);
    else setIsComplete(false);
  };

  const handleCompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsComplete(e.target.checked);
    setProgress(e.target.checked ? 100 : goal.progress || 0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle updating the progress and uploading the file
    onClose();
  };

  return (
    <div className="bet-modal-backdrop">
      <div className="bet-modal update-progress-modal" style={{ minWidth: 700, maxWidth: 900, minHeight: 60, gap: '0.15rem', padding: '10px 32px 10px 32px' }}>
        <button className="bet-modal-close" onClick={onClose}>&times;</button>
        <h2>Update Progress</h2>
        <div style={{ background: '#f6f6fa', borderRadius: 12, padding: 10, marginBottom: 10 }}>
          <div style={{ fontWeight: 600, fontSize: '1.08rem' }}>{goal.title}</div>
          <div style={{ color: '#a1a1aa', fontSize: '0.98rem' }}>{goal.desc || goal.category}</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bet-modal-section">Progress</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={handleProgressChange}
              style={{ flex: 1 }}
            />
            <span style={{ minWidth: 40, textAlign: 'right', fontWeight: 600 }}>{progress}%</span>
          </div>
          <div style={{ margin: '6px 0 6px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={isComplete}
              onChange={handleCompleteChange}
              id="mark-complete"
            />
            <label htmlFor="mark-complete" style={{ fontSize: '1rem', color: '#222' }}>Mark as 100% complete</label>
          </div>
          <div className="bet-modal-section">Progress Note</div>
          <textarea
            className="bet-modal-input"
            placeholder="Describe your progress, challenges, or achievements..."
            value={note}
            onChange={e => setNote(e.target.value)}
            style={{ minHeight: 36, background: '#f6f6fa', marginBottom: 6 }}
          />
          <div className="bet-modal-section">Submit Proof</div>
          <div style={{ border: '1.5px dashed #d1d5db', borderRadius: 8, padding: 6, marginBottom: 8, background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ color: '#a1a1aa', fontSize: 24, marginBottom: 2 }}>&#8682;</div>
            <div style={{ color: '#a1a1aa', fontSize: '0.97rem', marginBottom: 2 }}>Upload photo or video proof</div>
            <input
              type="file"
              accept="image/*,video/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button type="button" className="mygoals-card-proof" style={{ padding: '5px 12px' }} onClick={() => fileInputRef.current?.click()}>
              Choose File
            </button>
            {file && <div style={{ color: '#222', fontSize: '0.97rem' }}>{file.name}</div>}
          </div>
          <div className="bet-modal-actions" style={{ gap: 6, marginTop: 4 }}>
            <button className="bet-modal-confirm" type="submit">Update Progress</button>
            <button className="bet-modal-cancel" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const GoalDetailsModal = ({ isOpen, onClose, goal }: { isOpen: boolean; onClose: () => void; goal: any }) => {
  if (!isOpen || !goal) return null;
  return (
    <div className="bet-modal-backdrop">
      <div className="bet-modal" style={{ minWidth: 500, maxWidth: 700, maxHeight: 600, padding: '18px 32px 18px 32px', display: 'flex', flexDirection: 'column' }}>
        <button className="bet-modal-close" onClick={onClose}>&times;</button>
        <h2 style={{ marginBottom: 8, marginTop: 0 }}>Progress History</h2>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 2 }}>{goal.title}</div>
          <div style={{ color: '#a1a1aa', fontSize: '0.97rem', marginBottom: 0 }}>{goal.desc}</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16, paddingRight: 4 }}>
          {demoUpdates.map((u, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #e5e7eb', padding: 16, marginBottom: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ background: '#f3f4f6', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', color: '#222' }}>{u.progress}%</div>
                <div style={{ fontWeight: 600 }}>Progress: {u.progress}%</div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ background: u.statusBg, color: u.statusColor, borderRadius: 8, padding: '3px 12px', fontSize: '0.97rem', fontWeight: 500 }}>{u.status}</span>
                  <span style={{ color: '#a1a1aa', fontSize: '0.97rem' }}>{u.date}</span>
                </div>
              </div>
              <div style={{ color: '#888', fontSize: '0.93rem', marginLeft: 50 }}>{u.note}</div>
              {u.image && <img src={u.image} alt="proof" style={{ width: 70, height: 70, borderRadius: 8, marginLeft: 50, objectFit: 'cover' }} />}
              {u.dispute && <div style={{ color: '#e11d48', fontSize: '0.97rem', marginLeft: 50, display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ fontSize: 18 }}>🚩</span> Dispute: {u.dispute}</div>}
            </div>
          ))}
        </div>
        <div className="bet-modal-actions" style={{ marginTop: 18 }}>
          <button className="bet-modal-cancel" type="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const ProofModal = ({ isOpen, onClose, goal }: { isOpen: boolean; onClose: () => void; goal: any }) => {
  const [tab, setTab] = useState<'for' | 'against'>('for');
  if (!isOpen || !goal) return null;
  const forCount = demoBettors.for.length;
  const againstCount = demoBettors.against.length;
  return (
    <div className="bet-modal-backdrop">
      <div className="bet-modal" style={{ minWidth: 600, maxWidth: 600, minHeight: 500, maxHeight: 500, display: 'flex', flexDirection: 'column' }}>
        <button className="bet-modal-close" onClick={onClose}>&times;</button>
        <h2 style={{ marginBottom: 8, marginTop: 0 }}>Betting Details</h2>
        <div style={{ background: '#f6f6fa', borderRadius: 16, padding: 18, marginBottom: 18, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 6 }}>{goal.title}</div>
          <div style={{ display: 'flex', gap: 32, width: '100%', justifyContent: 'center', marginTop: 8 }}>
            <div style={{ color: '#22c55e', fontWeight: 700, fontSize: 22 }}>${goal.forAmount}<div style={{ fontWeight: 400, fontSize: 13, color: '#888' }}>Betting For</div></div>
            <div style={{ color: '#e11d48', fontWeight: 700, fontSize: 22 }}>${goal.againstAmount}<div style={{ fontWeight: 400, fontSize: 13, color: '#888' }}>Betting Against</div></div>
            <div style={{ color: '#222', fontWeight: 700, fontSize: 22 }}>{goal.bettors}<div style={{ fontWeight: 400, fontSize: 13, color: '#888' }}>Total Bettors</div></div>
          </div>
        </div>
        {/* Toggle buttons */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'center', flexWrap: 'nowrap' }}>
          <button onClick={() => setTab('for')} style={{ flex: 0, minWidth: 110, background: tab === 'for' ? '#e0fce7' : '#fff', color: tab === 'for' ? '#22c55e' : '#222', border: tab === 'for' ? '2px solid #22c55e' : '1.5px solid #e5e7eb', borderRadius: '8px 0 0 8px', padding: '10px 18px', fontWeight: 600, cursor: 'pointer', fontSize: 16, outline: 'none', whiteSpace: 'nowrap' }}>For ({forCount})</button>
          <button onClick={() => setTab('against')} style={{ flex: 0, minWidth: 110, background: tab === 'against' ? '#fee2e2' : '#fff', color: tab === 'against' ? '#e11d48' : '#222', border: tab === 'against' ? '2px solid #e11d48' : '1.5px solid #e5e7eb', borderRadius: '0 8px 8px 0', padding: '10px 18px', fontWeight: 600, cursor: 'pointer', fontSize: 16, outline: 'none', borderLeft: 'none', whiteSpace: 'nowrap' }}>Against ({againstCount})</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16, paddingRight: 4 }}>
          {(tab === 'for' ? demoBettors.for : demoBettors.against).map((b, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #e5e7eb', padding: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ background: tab === 'for' ? '#bbf7d0' : '#fecaca', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', color: '#222' }}>{b.initials}</div>
                <div style={{ fontWeight: 600 }}>{b.name}</div>
                <div style={{ color: '#a1a1aa', fontSize: '0.97rem', marginLeft: 6 }}>{b.date}</div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ background: '#bbf7d0', color: '#22c55e', borderRadius: 8, padding: '3px 12px', fontSize: '0.97rem', fontWeight: 500 }}>${b.amount}</span>
                </div>
              </div>
              <div style={{ background: tab === 'for' ? '#e0fce7' : '#fee2e2', color: tab === 'for' ? '#15803d' : '#e11d48', fontSize: '0.97rem', marginLeft: 50, borderRadius: 8, padding: '8px 12px', marginTop: 2 }}>{b.note}</div>
            </div>
          ))}
        </div>
        <div className="bet-modal-actions" style={{ marginTop: 18 }}>
          <button className="bet-modal-cancel" type="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const MyGoals = () => {
  const [showModal, setShowModal] = useState(false);
  const [progressModalGoal, setProgressModalGoal] = useState<any>(null);
  const [detailsModalGoal, setDetailsModalGoal] = useState<any>(null);
  const [proofModalGoal, setProofModalGoal] = useState<any>(null);
  return (
    <main className="mygoals-main">
      <div className="mygoals-header-row">
        <h1>My Goals</h1>
        <button className="mygoals-create-btn" onClick={() => setShowModal(true)}><FaPlus /> Create Goal</button>
      </div>
      <p className="mygoals-subtitle">Create, track, and manage your goals</p>
      <div className="mygoals-filters">
        {filters.map((f, i) => (
          <button key={f} className={`mygoals-filter${i === 0 ? ' active' : ''}`}>{f}</button>
        ))}
      </div>
      <div className="mygoals-list">
        {goals.map((g, i) => (
          <div className="mygoals-card" key={i}>
            <div className="mygoals-card-header">
              <div>
                <div className="mygoals-card-title">{g.title}</div>
                <div className="mygoals-card-desc">{g.desc}</div>
              </div>
              <div className="mygoals-card-tags">
                <span className="mygoals-card-difficulty" style={{ background: g.difficultyBg, color: g.difficultyColor }}>{g.difficulty}</span>
                <span className="mygoals-card-status" style={{ background: g.statusBg, color: g.statusColor }}>{g.status}</span>
              </div>
            </div>
            <div className="mygoals-card-progress-label-row">
              <span>Progress</span>
              <span className="mygoals-card-progress-percent">{g.progress}%</span>
            </div>
            <div className="mygoals-card-progress-bar">
              <div className="mygoals-card-progress-bar-inner" style={{ width: `${g.progress}%` }}></div>
            </div>
            <div className="mygoals-card-info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span className="mygoals-card-info-left"><FaClock /> {g.daysLeft} days left</span>
              <span className="mygoals-card-info-bets"><FaBullseye /> {g.bettors} bettors</span>
            </div>
            <div className="mygoals-card-bets-actions-row">
              <div className="mygoals-card-bets-row">
                <span className="mygoals-card-for">For: <span style={{ color: '#22c55e' }}>${g.forAmount}</span></span>
                <span className="mygoals-card-against">Against: <span style={{ color: '#e11d48' }}>${g.againstAmount}</span></span>
              </div>
              <button className="mygoals-card-proof" onClick={() => setProofModalGoal(g)}><FaUsers /> View Bettors</button>
            </div>
            <div className="mygoals-card-bottom-row">
              <button className="mygoals-card-update" onClick={() => setProgressModalGoal(g)}>Update Progress</button>
              <button className="mygoals-card-details white-box" onClick={() => setDetailsModalGoal(g)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
      <CreateGoalModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <UpdateProgressModal isOpen={!!progressModalGoal} onClose={() => setProgressModalGoal(null)} goal={progressModalGoal} />
      <GoalDetailsModal isOpen={!!detailsModalGoal} onClose={() => setDetailsModalGoal(null)} goal={detailsModalGoal} />
      <ProofModal isOpen={!!proofModalGoal} onClose={() => setProofModalGoal(null)} goal={proofModalGoal} />
    </main>
  );
};

export default MyGoals; 