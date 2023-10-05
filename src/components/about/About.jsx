import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {useState} from 'react'

const About = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <section id="about">

      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="https://nitkkr.ac.in/">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>BTech <br />Nit Kurukshetra</small>
            </article>
            </a>
            <a href="https://linktr.ee/chauhanharsh">
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>My Coding Profiles</h5>
                <small>200+ world wide</small>
            </article>
            </a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed projects</small>
            </article>
            </a>
          </div>

          <p>👋 Hello! I'm Harsh Chauhan, a dedicated coder and software developer, passionate about turning lines of code into impactful solutions.<br/>

🚀 
Specializing in coding and software development, I craft applications that bridge imagination with functionality. My expertise encompasses various languages and technologies, including C, C++, Java, Python, Django, MySql, SqLite.<br/>

💡 
I thrive on challenges, meticulously architecting and coding to create efficient and effective solutions. Clean code and robust designs are my signature.<br/>

🌱 
The tech world never stands still, and neither do I. I'm committed to staying up-to-date with the latest advancements and using them to elevate my projects.<br/>

🌏 
Whether you're a fellow coder, a potential collaborator, or simply intrigued by the digital realm, I'm excited to connect. Explore my portfolio and reach out anytime.<br/>

#InnovatingCodeCraft ✨</p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
