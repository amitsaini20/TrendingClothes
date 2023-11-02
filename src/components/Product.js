import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addItem,delItem} from '../redux/action';
// import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
export default function Product() {

    const{id} = useParams();
    const[data, setData]=useState([]);
    const[product,setProduct] = useState([]);
    const[loading,setLoading] = useState(true);
    const[cartBtn,setCartBtn]=useState('Add to Cart')

    // const dispatch = useDispatch();
    // const addProduct = (product) => {
    //     dispatch(addCart(product));
    // }

    useEffect(() => {
        // const getProduct = async () => {
        //     setLoading(true);
        //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            
        //     setData( response);
        //     setProduct( response);
        //     setLoading(false);
        // }
        // getProduct();
        
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((res)=>{ 
            setProduct(res.data);
        //    console.log("apiData",res);
           setLoading(false);
        })
          .catch((err)=>{
          console.error("Something",err)
        });
    
    },[]);
    // console.log("product",product)

    const Loading = ()=>{
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400}></Skeleton>
                </div>
                <div className='col-md-6 ' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style = {{marginLeft:6}}/>

                </div>
                
            </>
        )
    }

    const dispatch=useDispatch();

    const handleCart = (product)=>{
        if (cartBtn === 'Add to Cart'){
            dispatch(addItem(product))
            setCartBtn('Remove From Cart')
        }
        else{
            dispatch(delItem(product))
            setCartBtn('Add to Cart')
        }
    }
    const ShowProduct = ()=>{
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height='400px' width='400px'></img>
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                    </p>
                    <h3 className='displat-6 fw-bold '>$ {product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=>handleCart(product)}>{cartBtn}</button>
                    {/* <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>Add To Cart</button> */}
                    <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>Go To Cart</NavLink>
                </div>
            </>
        )
    }



  return (
    <div>
        <div className='container py-5'>
            <div className='row py-4'>
                {loading ? <Loading/>:<ShowProduct/>}
               
            </div>
        </div>
    </div>
  )
}
