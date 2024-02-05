
import React, { useEffect, useState } from 'react'

function Signup() {
    const [isOpen, setIsopen]= useState(false)
    const [value, setValue]= useState([])
    function fetchinfo(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then(data=>setValue(data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchinfo()
        console.log("useeffect is running ")
    },[])
    function changing(){
        setIsopen(!isOpen)
    }
    function handleClick(){
        fetchinfo()
        changing()
    }
  return (
    <div>
        
        <input
          type="button"
          value='click here'
          checked={isOpen}
          onClick={handleClick}
        />
        
     

      {isOpen && (
        <form>
          <h1>welcome to react.js</h1>
          {
            value.map((item)=>{
                return(
                    <div key={item.id}>
                        {item.body}<br/><br/><br/>
                        {item.title}
                        {item.userId}
                    </div>
                )
            })
          }
        </form>

      )}
      
    </div>
  )
}

export default Signup


