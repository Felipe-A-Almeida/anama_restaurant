import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={ images.spoon } alt="avout spoon" className='spoon__img' />
        <p className='p__opensans'>
          At Anamá, we're more than just a restaurant. We're a place to celebrate life's moments, from intimate dinners to joyous gatherings. Our carefully curated wine list and handcrafted cocktails perfectly complement every dish, ensuring your experience is nothing short of extraordinary.
        </p>
        <button type="button" className='custom__button'>Know more</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={ images.knife } alt="about knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={ images.spoon } alt="avout spoon" className='spoon__img' />
        <p className='p__opensans'>
          Since 2025 our culinary artistry meets a warm, welcoming ambiance. Nestled in the heart of downtown, Crimson Table has been delighting taste buds since 2015 with our commitment to fresh ingredients, innovative dishes, and unforgettable dining experiences.
        </p>
        <button type="button" className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
