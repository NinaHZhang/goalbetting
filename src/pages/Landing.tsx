import { useNavigate } from 'react-router-dom';
import { FaBullseye, FaTrophy, FaUsers } from 'react-icons/fa';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-green-600">Bet</span>
            <span className="text-red-600">YouCan't!</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your goals into bets. Challenge yourself and others. Win rewards and build better habits.
          </p>
          <div className="mt-10">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <FaBullseye className="text-2xl text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Set Goals</h3>
            <p className="mt-4 text-gray-600">
              Create meaningful goals and turn them into bets. Stay motivated and accountable.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <FaUsers className="text-2xl text-blue-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Challenge Friends</h3>
            <p className="mt-4 text-gray-600">
              Invite friends to bet on your goals. Support each other and compete for rewards.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <FaTrophy className="text-2xl text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Win Rewards</h3>
            <p className="mt-4 text-gray-600">
              Earn rewards for achieving your goals. Build a winning streak and climb the leaderboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 