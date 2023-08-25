import React from 'react';

import {FaEnvelopeOpen, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
// import {SiLeetcode} from '.react-icons/SiLeetcode';


import { FiSend } from 'react-icons/fi';

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact_title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discuss new projects, creative 
            ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">sujeetgupta2801@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneAlt className='info__icon'/>

              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+91 8595827683</h4>
              </div>
            </div>

          </div>

          <div className="contact__social">
            <a href="https://github.com/Sujeet2801" target='_blank' className="contact__social-link">
              <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/sujeet-kumar-gupta-3344161b8/" target='_blank' className="contact__social-link">
              <FaLinkedin/>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100014684688358" target='_blank' className="contact__social-link">
              <FaFacebook/>
            </a>

          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='YOUR NAME'
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='YOUR MAIL'
              className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='YOUR TOPIC'
              className="form__control" />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='YOUR MESSAGE'
              className="form__control textarea">
            </textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact