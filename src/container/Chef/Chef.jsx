import React from 'react';

import { SubHeading } from '../../components';

import { images } from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="Quote" />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tincidunt tortor.
          </p>
        </div>
        <p className='p__opensans'>
          Nulla facilisi. Duis eu lorem risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sed sagittis orci. Nullam a molestie quam. In hac habitasse platea dictumst. Ut vestibulum nunc quis lorem ultricies posuere. Aliquam ex nisi, condimentum vitae dolor at, tempus dapibus lacus.
        </p>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>          
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
