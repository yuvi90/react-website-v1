// Deps
import React, { useEffect } from 'react';
// Components
import { HeroSection } from '../components';
// Data
import { useDataContext } from '../context/DataProvider';

const Home = () => {

  const data = useDataContext();

  useEffect(() => {
    data.updateHomePage();
  }, []);

  return (
    <>
      <HeroSection />
    </>
  )
}

export default Home;