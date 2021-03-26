// Use rfce
import React from 'react';
import { Button } from './Button';
import '../App.css'; 
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="https://images.unsplash.com/photo-1539511977266-f0b884a7ee39?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80" alt="" />
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Get Started </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Watch  </Button>
            </div>
        </div>
    )
}

export default HeroSection
