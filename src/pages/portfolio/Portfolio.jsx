import React from 'react'
import { portfolio } from '../../data';
import { internship } from '../../data';
import PortfolioItem from '../../component/PortfolioItem';
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

       <h2 className="section__subtitle subtitle__center">
          Internships and Certificates
      </h2> 

      <div className="portfolio__container container grid">
        {internship.map((item) => {
          return (<PortfolioItem key={item.id} {...item}/>)
        })}
      </div>

      <div className="separator"></div>

      <h3 className="section__subtitle subtitle__center">
        Projects
      </h3>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return (<PortfolioItem key={item.id} {...item}/>)
        })}
      </div>


    </section>

  )
}

export default Portfolio