import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center cursor">
                            Already registered?{" "}
                            <span className="link-primary" >
                                <NavLink to='/login'>Log in</NavLink>
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Full Name"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-dark">
                                <NavLink to='/login' className='text-white text-decoration-none'>Submit</NavLink>
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <NavLink to="/register">password?</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}
