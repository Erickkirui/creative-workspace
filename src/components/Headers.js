import React from 'react';
import '/home/erick/portfolio/creative/src/App.css'

function Header (){
  return (
    <div className="row-container">
      <div className="left-content">
      <h1 className="heading">
          Discover the amazing  <br /> world of <span className='erick'> -Erick Kirui- </span>
        </h1>
        <p className="text">Creative problem solver and highly productive individual, achieving notable successes while also embracing failures as opportunities for growth.</p>
        <div className="buttons">
          <button className='button1'>Button 1</button>
          <button className='button2'>Button 2</button>
        </div>
      </div>
      <div className="right-content">
        <div className="masonry-container">
          <div className="masonry-item" style={{ gridRow: 'span 2' }}>
            <div className="container1">
              <div className="text-top">Creative</div>
              <div className="water"></div>
              <div className="unsettled-water"></div>
              <div className="percentage"></div>
            </div>
          </div>
          <div className="masonry-item">
            <div className="container2">
              <div className="text-top">Productivity</div>
              <div className="water"></div>
              <div className="unsettled-water"></div>
              <div className="percentage"></div>
            </div>
          </div>
          <div className="masonry-item">
            <div className="container3">
              <div className="text-top">Fails</div>
              <div className="water"></div>
              <div className="unsettled-water"></div>
              <div className="percentage"></div>
            </div>
          </div>
          <div className="masonry-item">
            <div className="container4">
              <div className="text-top">Achivements</div>
              <div className="water"></div>
              <div className="unsettled-water"></div>
              <div className="percentage"></div>
            </div>
          </div>
          <div className="masonry-item">
            <div className="container5">
              <div className="text-top">Problem solving</div>
              <div className="water"></div>
              <div className="unsettled-water"></div>
              <div className="percentage"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;