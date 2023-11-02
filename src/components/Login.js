import React from 'react'
import { NavLink } from 'react-router-dom'

// import { Modal,ModalBody } from 'react-bootstrap'
// import { Modal } from 'bootstrap'

export default function Login() {
    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Log In</h3>
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
                               <NavLink to ='/' className='text-white text-decoration-none'>Submit</NavLink>
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <NavLink to="/register">password?</NavLink>
                        </p>
                    </div>
                </form>
            </div>
            {/* <form className="container p-3 my-5 d-flex flex-column w-50">

                <input className='mb-4' label='Email address' id='form1' type='email' />
                <input className='mb-4' label='Password' id='form2' type='password' />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <checkbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>

                <button className="mb-4">Log in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <i fab icon='facebook-f' size="sm" />
                        </button>

                        <button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <i fab icon='twitter' size="sm" />
                        </button>

                        <button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <i fab icon='google' size="sm" />
                        </button>

                        <button tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <i fab icon='github' size="sm" />
                        </button>

                    </div>
                </div>

            </form> */}
            {/* <form>
            <div className='container'>
            <div className='row'>
                    <div className='col-12 text-center py-4 my-4'>
                        <h1>Login</h1>
                        <hr />
                    </div>
                </div>
                <div className=" col mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-dark">Login</button>
                </div>
            </form> */}
            {/* <!-- Button trigger modal --> 
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>


            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
