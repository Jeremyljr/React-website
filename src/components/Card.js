import React from 'react'
import Carditems from './Carditems'
import './Card.css'

function Card() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditems 
                        src='https://images.unsplash.com/photo-1592904083165-8c001f6e8d7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=610&q=80'
                        text='Explore the hidden waterfall deep inside the Amazon Junngle'
                        label='Adventure'
                        path='/services'
                        />
                        <Carditems 
                        src='https://images.unsplash.com/photo-1601994725833-c65037b22a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80'
                        text='Travel through the Island of Bali in a proivate cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditems 
                        src='https://images.unsplash.com/photo-1592904083165-8c001f6e8d7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=610&q=80'
                        text='Explore the hidden waterfall deep inside the Amazon Junngle'
                        label='Adventure'
                        path='/services'
                        />
                        <Carditems 
                        src='https://images.unsplash.com/photo-1601994725833-c65037b22a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80'
                        text='Travel through the Island of Bali in a proivate cruise'
                        label='Luxury'
                        path='/services'
                        />
                        <Carditems 
                        src='https://images.unsplash.com/photo-1601994725833-c65037b22a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80'
                        text='Travel through the Island of Bali in a proivate cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
