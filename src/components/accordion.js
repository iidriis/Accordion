import React, {useState} from "react"
import "../App.css"
function Accordion({title,text}){
    const [show, setShow] = useState(false)
    return (
        <div className = "accordion">
            
            <div className = "header">
            <h2>{title}</h2>
            <button onClick ={()=>setShow(!show)}>{show ? "-" : "+"}</button>
            </div>
            { show && <p>{text}</p>}
            
        </div>
    )
}
export default Accordion;