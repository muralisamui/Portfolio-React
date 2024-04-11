import { useState, useEffect } from 'react';
import './App.css'
import { GradientCircularProgress } from './components/Loader/GradientCircularProgress';
import BasePage from './pages/BasePage/BasePage';

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
    >
      {isLoading ? (
        <GradientCircularProgress />
      ) : (
        <BasePage />
      )}
    </div>
  );
};

export default App;

