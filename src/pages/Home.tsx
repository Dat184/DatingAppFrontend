import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import { useEffect } from 'react';
import ScrollingBanner from '../components/home/ScrollingBanner';
import Features from '../components/home/Features';
import Steps from '../components/home/Steps';

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
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;