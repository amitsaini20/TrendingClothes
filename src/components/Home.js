import React from 'react'
import Products from './Products'
import { StrictMode } from "react";

export default function Home() {
  return (
    <div className='hero'>
    <div className='card bg-dark text-white border-0'>
        <img src='/images/photo1.jpg' className='card-img' alt='Background' height='550px'></img>

        <div className='card-img-overlay d-flex flex-column justify-content-center'>
            <div className=''>
                <h5 className='card-title display-3 fw-bolder mb-0'>New Season Collections</h5>
                <p className='card-text lead fs-2'>Check Out All Articals</p>
            </div>
        </div>
    </div>
    <Products/>

    </div>
  )
}

