import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import { useEffect } from 'react';
import ScrollingBanner from '../components/home/ScrollingBanner';
import Features from '../components/home/Features';
import Steps from '../components/home/Steps';
import Contact from '../components/home/Contact';
import Tittle from '../components/home/Tittle';

const Home = () => {
  useEffect(() => {
    document.title = 'Perfect Date - Tạo kỷ niệm đáng nhớ cùng nhau';
  }, []);

  return (
    <>
      <Hero />
      <Introduction />
      <ScrollingBanner />
      <Features />
      <Steps />
      <Contact />
      <Tittle />
    </>
  );
};

export default Home;