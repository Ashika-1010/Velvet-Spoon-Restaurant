import React from 'react'
import {Link} from 'react-scroll'
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id ='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">
                    At Velvet Spoon, we believe great food creates unforgettable moments. 
                    From fresh ingredients to carefully crafted recipes, every dish is 
                    prepared with passion, flavor, and a touch of comfort to make every 
                    visit truly special.
                </p>
                <Link
                    to="menu"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="menuBtn"
                    >
                    Explore Menu
                    <HiOutlineArrowRight/>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About