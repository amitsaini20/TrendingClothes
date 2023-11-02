import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-black fw-bold mb-4'>About Us</h1>
                        <p className='lead mb-4 text-black'>
                            A fashion trend signifies a specific look or expression that is spread across a population at a specific time and place. A trend is considered a more ephemeral look, not defined by the seasons when collections are released by the fashion industry. A trend can thus emerge from street style, across cultures, and from influencers and other celebrities.

                            Fashion trends are influenced by several factors, including cinema, celebrities, climate, creative explorations, innovations, designs, political, economic, social, and technological. Examining these factors is called a PEST analysis. Fashion forecasters can use this information to help determine the growth or decline of a particular trend.
                        </p>
                        <NavLink to ='/contact' className='btn btn-dark px-3'>Contact Us</NavLink>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center '>
                        <img src='/images/photo2.jpg' alt='About Us' height='400px' width='400px'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
