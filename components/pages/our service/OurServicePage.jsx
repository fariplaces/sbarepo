// pages/index.js

import LatestNews from '../components/LatestNews';
import ServiceArea from '../components/ServiceArea';
import WhyChooseUs from '../components/WhyChooseUs';
import LetsTalk from '../components/LetsTalk';

const HomePage = () => {
  return (
    <div>
      <LatestNews />
      <ServiceArea />
      <WhyChooseUs />
      <LetsTalk />
    </div>
  );
};

export default HomePage;
