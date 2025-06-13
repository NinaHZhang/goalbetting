import { FaCamera, FaUserEdit } from 'react-icons/fa';

const groupMembers = [
  { initial: 'E' },
  { initial: 'D' },
  { initial: 'Y' },
  { initial: 'S' },
  { initial: 'M' },
  { initial: 'L' },
];

const Profile = () => {
  return (
    <main style={{ padding: '40px 0 0 40px', flex: 1, minWidth: 0 }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 0 }}>Profile</h1>
      <p style={{ color: '#6b7280', fontSize: '1.1rem', margin: 0, marginBottom: 32 }}>
        Manage your account, group, and view your stats
      </p>
      {/* Profile Info */}
      <div style={{ background: '#fff', borderRadius: 24, border: '1.5px solid #ececec', padding: '36px 56px', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 18, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: 500, marginBottom: 18 }}>Profile Information</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, color: '#fff', fontWeight: 700 }}>YN</div>
            <button style={{ position: 'absolute', bottom: 8, right: 8, background: '#fff', border: '1.5px solid #ececec', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ color: '#222', fontSize: 18 }}><FaCamera /></span>
            </button>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Display Name</div>
              <span style={{ color: '#222', fontSize: 16, cursor: 'pointer' }}><FaUserEdit /></span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 6 }}>Your Name</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ background: '#f3f4f6', color: '#222', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 15 }}>Rank #3</span>
              <span style={{ background: '#f3f4f6', color: '#222', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 15 }}>$2450</span>
            </div>
          </div>
        </div>
      </div>
      {/* Account Security */}
      <div style={{ background: '#fff', borderRadius: 24, border: '1.5px solid #ececec', padding: '36px 56px', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 18, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: 500, marginBottom: 18 }}>Account Security</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 56, marginBottom: 18 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 4 }}>Email Address</div>
            <div style={{ color: '#6b7280', fontSize: '1.05rem' }}>your.email@example.com</div>
          </div>
          <button style={{ background: '#18181b', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Change Email</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 4 }}>Password</div>
            <div style={{ color: '#6b7280', fontSize: '1.05rem' }}>Last changed 2 months ago</div>
          </div>
          <button style={{ background: '#18181b', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Change Password</button>
        </div>
      </div>
      {/* Current Group */}
      <div style={{ background: '#fff', borderRadius: 24, border: '1.5px solid #ececec', padding: '36px 56px', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 18, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: 500, marginBottom: 18 }}>Current Group</div>
        <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
          College Friends Productivity 👑
        </div>
        <div style={{ color: '#6b7280', fontSize: '1.05rem', marginBottom: 2 }}>8 members • Current leader: Emma</div>
        <div style={{ color: '#6b7280', fontSize: '1.05rem', marginBottom: 8 }}>Prize: Winner gets dinner paid by group</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          {groupMembers.map((m, i) => (
            <div key={i} style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #7f7fff 0%, #a7c1ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18 }}>{m.initial}</div>
          ))}
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontWeight: 700, fontSize: 18 }}>+2</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 8 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.08rem', marginBottom: 2 }}>Invite Code</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: '#f3f4f6', color: '#222', borderRadius: 8, padding: '4px 12px', fontWeight: 500, fontSize: 15 }}>CF2025</span>
              <button style={{ background: '#fff', border: '1.5px solid #ececec', borderRadius: 8, color: '#222', fontSize: 18, padding: '6px 12px', cursor: 'pointer' }} title="Copy invite code">📋</button>
            </div>
          </div>
          <button style={{ background: '#18181b', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 28px', fontWeight: 600, fontSize: 15, cursor: 'pointer', marginLeft: 'auto' }}>View Details</button>
        </div>
      </div>
    </main>
  );
};

export default Profile; 