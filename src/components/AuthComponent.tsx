import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthComponent: React.FC = () => {
  const { user, profile, signInWithGoogle, signInWithEmail, signUpWithEmail, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, displayName);
      }
    } catch (err: any) {
      let errorMessage = err.message;
      
      if (errorMessage.includes('Firebase not configured')) {
        errorMessage = '⚙️ Firebase not configured. Please add your Firebase credentials to the environment variables and restart the development server.';
      }
      
      setError(errorMessage);
    }
  };

  if (user && profile) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {profile.displayName && profile.displayName !== 'Anonymous' 
                ? profile.displayName[0]?.toUpperCase()
                : user.email?.[0]?.toUpperCase() || 'U'}
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">
                {profile.displayName && profile.displayName !== 'Anonymous' 
                  ? profile.displayName 
                  : user.displayName || user.email?.split('@')[0] || 'User'}
              </h3>
              <p className="text-gray-400 text-xs">{profile.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="text-red-400 hover:text-red-300 text-sm px-3 py-1 rounded border border-red-400 hover:border-red-300 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {isLogin ? 'Sign In' : 'Sign Up'}
      </h2>

      <button
        onClick={signInWithGoogle}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-4 transition-colors"
      >
        Continue with Google
      </button>

      <div className="text-center text-gray-400 mb-4">or</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500"
            required
          />
        )}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500"
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500"
          required
        />

        {error && (
          <div className="text-red-400 text-sm text-center">{error}</div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;