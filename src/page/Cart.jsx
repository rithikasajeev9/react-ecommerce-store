import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = ({setCnt,cnt}) => {
    const [cart,setCart]=useState([])
    let [count,setCount]=useState(0)
    const navigator=useNavigate()

        useEffect(()=>{
            const data=[];
            const keys=Object.keys(localStorage);
            for(let i=0;i<keys.length;i++)
            {
                data.push(JSON.parse(localStorage.getItem(keys[i])))
            }
            setCart(data)
        },[count])
        const removeProduct=(key)=>{
            localStorage.removeItem(key)
            setCount(count=count+1)
            setCnt(cnt=cnt+1)
        }
        const buy=()=>{
            localStorage.clear();
            setCnt(cnt+=1)
             navigator('/')
        }
  return (
    <div className='container'>
        <div className="row">
        {
            cart.map((ct,index)=>(<div className="col-lg-12 d-flex justify-content-between align-center border my-3" key={index}>
                <div className="start1">
                    <div className="st d-flex">
                    <img src={ct.thumbnail} style={{height:"200px"}} alt="" />
                    <div className="as">
                        <h2>{ct.title}</h2>
                        <h3>{ct.price}$</h3>
                    </div>
                    </div>
                </div>
                <div className="start2 d-flex align-items-center">
                    <button className='btn btn-primary ' onClick={()=>{removeProduct(ct.id)}}>
                        Remove
                    </button>
                </div>
            </div>))
        }
        </div>
            {cart.length!=0?<button onClick={buy}>Buy</button>:<p>click <Link to={'/'}>Home</Link>for add products</p>}

    </div>
  )
}

export default Cart
