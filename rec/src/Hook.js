import React,{useState} from 'react'

function Hook(){
    const [color,setColor]=useState("")
    // function update(){
    //     setColor("red")
    // }
    return(
        <button onClick={()=>setColor("green")}>color-{color}</button>
    )
}

export default Hook

