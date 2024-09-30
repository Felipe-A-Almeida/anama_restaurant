import React from 'react'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavor" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Welcome to the best restaurant of the world! Here you can taste the best of the flavors and meet the nirvana of the gastronomy.
          With a worldwide menu, you can have the complete experience of a large amount of countries by tasting exotic revenues and traveling
          around the world sitting on a chair.
        </p>
        <button type="button" className='custom__button'>Explore menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={ images.welcome } alt="header img" />
      </div>
    </div>
  )
}

export default Header