import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useAuth = () => {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    // Clear any auth tokens from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // You might want to make an API call to logout on the server
    fetch('https://web.ics.purdue.edu/~zeng274/profile-app/logout.php', {
      method: 'POST',
      credentials: 'include' // This is important if you're using cookies
    })
    .then(() => {
      // Redirect to login page after successful logout
      navigate('/login');
    })
    .catch((error) => {
      console.error('Logout error:', error);
      // Still redirect even if the server call fails
      navigate('/login');
    });
  }, [navigate]);

  return { logout };
};

export default useAuth; 