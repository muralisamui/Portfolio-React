import { useState, useEffect } from 'react';
import './App.css'
import { GradientCircularProgress } from './components/Loader/GradientCircularProgress';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/BasePage/Home';
import Projects from './pages/Projects';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  return (
    // <div
    //   style={{ width: '100%' }}
    // >
    //   {isLoading ? (
    //     <GradientCircularProgress />
    //   ) : (
    //     <BasePage />
    //   )}
    // </div>
    <Router>
      <div style={{ width: '100%' }}>
        {isLoading ? (
          <GradientCircularProgress />
        ) : (
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/projects"  element={<Projects/>} />

            {/* Add more routes here if needed */}
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;

