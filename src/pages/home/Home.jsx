import React from 'react';
// import Profile from '../../assets/sujeet.jpg';
import img from '../../assets/img.png'
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import './home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={img} alt="" className='home__img'/>

      <div className="home__content">
        <div className="home__data">
          <h3 className="home__title">
            <span >Hi!, I'm Sujeet,{' '} </span>Frontend Developer
          </h3>

          <p className="home__description">
          " I'm a web developer with a strong command of JavaScript,
          I create engaging websites that seamlessly blend with functionality."
          </p>

          <Link to ='/about' className="button">
            More About Me {' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>

        </div>
      </div>

      {/* <div className="color__block"></div> */}

    </section>
  )
}

export default Home