import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { supabase } from '../supabaseClient'; // Uncomment when backend is ready

const JoinGroup = () => {
  const navigate = useNavigate();
  const [groupCode, setGroupCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // TODO: Replace with actual Supabase group join logic
    setTimeout(() => {
      setLoading(false);
      if (groupCode.trim().length === 6) {
        navigate('/dashboard');
      } else {
        setError('Invalid group code. Please enter a valid 6-digit code.');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 px-4 py-10">
      <div className="flex flex-col items-center mb-10">
        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-3">
          <span className="text-white text-2xl font-bold"> <svg width='24' height='24' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' stroke='white' strokeWidth='2'/><circle cx='12' cy='12' r='4' stroke='white' strokeWidth='2'/><circle cx='12' cy='12' r='1.5' fill='white'/></svg> </span>
        </div>
        <div className="text-2xl font-semibold mb-1">BetYouCan&apos;t</div>
        <div className="text-3xl font-bold mb-1">Ready to get started?</div>
        <div className="text-gray-400 text-base mb-2 text-center max-w-xl">Choose how you&apos;d like to begin your goal-crushing journey with friends.</div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
        {/* Join a Group Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
          <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-3">
            <span className="text-green-500 text-3xl font-bold">#</span>
          </div>
          <div className="text-xl font-semibold mb-1">Join a Group</div>
          <div className="text-gray-500 text-center mb-4">Have a group code from a friend? Enter it below to join their challenge and start competing right away.</div>
          <form className="w-full flex flex-col gap-3" onSubmit={handleJoin}>
            <label htmlFor="groupCode" className="block text-sm font-medium text-gray-700 mb-1 text-left">Group Code</label>
            <input
              id="groupCode"
              name="groupCode"
              type="text"
              maxLength={6}
              minLength={6}
              required
              value={groupCode}
              onChange={e => setGroupCode(e.target.value.toUpperCase())}
              className="block w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-black focus:outline-none placeholder-gray-400 text-base tracking-widest text-center font-mono"
              placeholder="Enter 6-digit code (e.g., ABC123)"
              autoComplete="off"
            />
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className={`w-full py-3 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center gap-2 ${groupCode.length === 6 ? 'bg-gray-700 text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              disabled={loading || groupCode.length !== 6}
            >
              {loading ? 'Joining...' : <><span>Join Group</span> <span className="text-xl">→</span></>}
            </button>
          </form>
          <ul className="mt-5 space-y-1 text-left text-green-600 text-sm">
            <li>• Join your friends&apos; challenges instantly</li>
            <li>• See group leaderboards and progress</li>
            <li>• Start competing immediately</li>
          </ul>
        </div>
        {/* Create a Group Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100">
          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-blue-500 text-3xl font-bold">+</span>
          </div>
          <div className="text-xl font-semibold mb-1">Create a Group</div>
          <div className="text-gray-500 text-center mb-4">Be the leader! Start a new challenge group and set the rules, prizes, and consequences for everyone.</div>
          <button
            className="w-full py-3 rounded-xl bg-black text-white text-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 mb-3"
            onClick={() => navigate('/create-group')}
          >
            Create New Group <span className="text-xl">→</span>
          </button>
          <ul className="mt-2 space-y-1 text-left text-blue-600 text-sm">
            <li>• Set custom rewards and consequences</li>
            <li>• Choose your group&apos;s challenge theme</li>
            <li>• Get a shareable group code instantly</li>
          </ul>
        </div>
      </div>
      {/* How It Works Section */}
      <div className="w-full max-w-3xl mt-16">
        <div className="flex flex-col items-center mb-8">
          <div className="text-2xl font-bold mb-2">How It Works</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-lg font-bold mb-2">1</div>
            <div className="font-semibold mb-1">Create or Join</div>
            <div className="text-gray-500 text-center">Start a group or join with a friend&apos;s code</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-lg font-bold mb-2">2</div>
            <div className="font-semibold mb-1">Set Goals</div>
            <div className="text-gray-500 text-center">Choose challenges and agree on stakes</div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-lg font-bold mb-2">3</div>
            <div className="font-semibold mb-1">Win or Pay Up</div>
            <div className="text-gray-500 text-center">Complete goals for rewards or face consequences</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGroup; 