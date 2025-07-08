import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Details = ({setCnt,cnt}) => {
   
  const navigator=useNavigate()
  const [data,setData]=useState({})
  const {id}=useParams();
  const[pic,setPic]=useState("")
  console.log(id);
  async function getDetails(){
    const res=await axios.get(`https://dummyjson.com/products/${id}`)
    setData({})
    setData(res.data)
    setPic(res.data.thumbnail)
  }
  const addToCart=()=>{
    const key=data.id
    console.log(key);
    localStorage.setItem(key,JSON.stringify(data))
    setCnt(cnt=cnt+1)
    navigator('/cart')
  }
  useEffect(()=>{
    getDetails()
  },[])
  console.log(data);
  return (
    <div className="container  m-5 mx-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="row">
            <div className="col-lg-12">
              <img src={pic}  style={{width:"100%",height:"450px"}} alt="" />
             </div>
              <div className="col-lg-12">
                <div className="row my-5">
                {
                  data.images?.map((dt)=>(<div className='col-lg-2'>
                     <img src={dt} style={{width:"100%",height:"75px"}} alt="" className='w-100 ' onMouseMove={()=>{
                        setPic(dt)
                     }}/>
                   </div>))
                 }
              </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                  <button className='btn btn-lg btn-warning' onClick={addToCart}>Add to cart</button>
              </div>

          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h4 style={{padding:"2px"}}>{data.title}</h4>         
          <button className='btn btn-success' style={{fontWeight:"bold",padding:"2px"}}>{data.rating}&#9733;</button> 
          {/* <h6  className='text-success' >Extra {(((data.price-data.discountPercentage)/100)*100)} %off</h6> */}
          <p className='text-decoration-line-through text-secondary fw-light'>Price {data.price}$</p>
          <p className='display-8'>${(((data.price-data.discountPercentage)/100)*100)}</p>
          <p  className='text-success '>{data.discountPercentage}% off</p>
          <p >{data.description}</p>

        </div>
      </div>
    </div>
  )
}

export default Details
