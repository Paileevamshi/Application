import React,{useState,useEffect} from 'react'

function DocTitle(){
    const [count,setCount] =useState(0)
    useEffect=(() =>{
        document.title=`Count ${count}`
    },[count])
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>count-{count}</button>
        </div>
    )
}

export default DocTitle