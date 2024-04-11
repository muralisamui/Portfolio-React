import { useState, useEffect } from 'react';
import './App.css'
import { GradientCircularProgress } from './components/Loader/GradientCircularProgress';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    <div
      style={{ width: '100%' }}
    // style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      {isLoading ? (
        <GradientCircularProgress />
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default App;

