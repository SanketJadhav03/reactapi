import React, { useState } from 'react'
import Gallery from './Gallery'

const Master = () => {
    const [Data ,setData] = useState([])
    fetch("http://localhost:8080/category/getall").then(
        response=>{
            return response.json();
        }
    ).then(
        Data=>{
            setData(Data);
        }
    )
  return (
    <div className='container'>

      <div className='card  ' style={{width:"100%"}}>
        <div className='card-header text-center'>
            <h1>All Gallary</h1>
        </div>
        <div className='card-body'>
            <div className='table'>
            <div className='row '>
            {
                Data.map((item,index)=>{
                    return(
                        <Gallery 
                        id={index}
                        name={item.cat_name}
                        class={item.cat_des}
                        roll={item.cat_id}
                        />
                    )
                })
            }
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Master
