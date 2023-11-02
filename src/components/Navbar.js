import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink ,Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import { addItem } from '../redux/action'
// import Login from './Login'



export default function Navbars() {
    const state = useSelector((state)=> state.addItems)
    console.log(state)
    // const navigate = useNavigate();
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
            <div className='container-fluid'>
            <h4 className='nav-link navbar-brand fw-bold fs-4 cursor' onClick={() => (navigate('/'))}>Trending Collection</h4>
                {/* <a className="navbar-brand fw-bold fs-4" href='#'>
                
                New Collection</a> */}
                
                <button
                 className="navbar-toggler" 
                 type="button" 
                 data-toggle="collapse" 
                 data-target="#navbarSupportedContent" 
                 aria-controls="navbarSupportedContent" 
                 aria-expanded="false" 
                 aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            {/* <a className="nav-link" aria-current='page' href="/">Home </a> */}
                          <h4 className='nav-link cursor' onClick={() => (navigate('/'))}>Home</h4>

                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/products">Products</a> */}
                            {/* <button onClick={()=>navigate("/products")}>Products</button> */}
                            <h4 className='nav-link cursor' onClick={() => (navigate('/products'))}>Product</h4>
                            
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">About</a> */}
                            <h4 className='nav-link cursor' onClick={() => (navigate('/about'))}>About</h4>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/contact">Contact</a> */}
                            <h4 className='nav-link cursor' onClick={() => (navigate('/contact'))}>Contact</h4>
                        </li>
                        

                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>

                    <div className='buttons'>
                    {/* <Login/> */}
                    <h4  className='btn btn-outline-dark' onClick={() => (navigate('/login'))}>
                        <i className='fa fa-sign-in me-1'></i>Login
                    </h4>
                    <h4  className='btn btn-outline-dark ms-2' onClick={() => (navigate('/register'))}>
                        <i className='fa fa-user-plus me-1'></i>Register
                    </h4>
                    <h4  className='btn btn-outline-dark ms-2' onClick={() => (navigate('/cart'))}>
                        <i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})
                    </h4>

                    </div>
                    {/* <form className="d-flex">
                        <input 
                        className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form> */}
                </div>
                </div>
            </nav>
        </div>
    )
}

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';

// function Navbars() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container >
//         <Navbar.Brand className='fw-bold fs-4' href="#">New Collection</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         {/* <Navbar.Collapse id="navbarScroll"> */}
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             // style={{ maxHeight: '100px' }}
//             // navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         {/* </Navbar.Collapse> */}
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbars;