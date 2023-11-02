import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { delItem } from '../redux/action';
import { NavLink } from 'react-router-dom';
export default function Cart() {
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className='container py-4'>
                    <button className='btn-close float-end' aria-label='Close' onClick={() => handleClose(cartItem)}></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height='200px' width='180px'></img>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>${cartItem.price}</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    // const [products, setProduct] = useState([]);
    // const {id} = useParams();
    // const proDetail = products.filter(x => x.id == id.id)
    // const product = proDetail[0];
    // console.log(product);
    // useEffect(() => {
    //     axios
    //         .get(`https://fakestoreapi.com/products/${id}`)
    //         .then((res) => {
    //             setProduct(res.data);
    //             // console.log("apiData", res);

    //         })
    //         .catch((err) => {
    //             console.error("amit", err)
    //         });

    // }, []);
    // console.log("product", product)
    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5 mx-auto'>
                <div className='container py-4 '>
                    <div className='row '>
                        <h3 >Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    // const button=()=>{
    //     return (
    //         <div className='container'>
    //             <div className='row'>
    //                 <NavLink to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To Checkout</NavLink>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {/* {state.length !== 0 && button()} */}
        </>
    )
}
