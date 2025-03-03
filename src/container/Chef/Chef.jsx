import React from 'react';

import { SubHeading } from '../../components';

import { images } from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="chef" className='app__wrapper_img_chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="Quote" />
          <p className='p__opensans'>
            The world would be better if everything was done with love. If we can't change the whole world, let's start changing ourselves.
          </p>
        </div>
        <p className='p__opensans'>
          Born and raised in Ipeúna, São Paulo, Chef Maria Laura grew up surrounded by the rich culinary traditions of Brazil. Her passion for food began in her family's kitchen, where she learned that every ingredient has a story and every meal is an opportunity to create connections.
        </p>
        <div className='app__chef-sign'>
          <p>Maria Laura Garcia dos Santos</p>          
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
