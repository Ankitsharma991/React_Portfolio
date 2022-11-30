import React from 'react'
import './portfolio.css';
// import IMG1 from './bgRemoved/me3.png';

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            0{/* <IMG1/> */}
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Ankitsharma991" className='btn'>Github</a>
          <a href="https://linkedin.com/Ankitsharma" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default portfolio