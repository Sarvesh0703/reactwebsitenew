import { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ transform: `scaleX(${scroll})` }}
    ></div>
  );
};

export default ScrollProgress;
