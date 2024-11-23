import React, { useState, useEffect } from "react"
import Getdata from "./Getdata"
import '../index.css';



const Accordian = (props)=>{
const [recData, setRecData]=useState(props.data)
useEffect(() => {
    setRecData(props.data);
  }, [props.data]);

return(recData.map((x)=>{
    return(<div key={x.id}>
<div className="h-10 w-90 border-2 bg-blue"><p>{x.title}</p></div>
<div>

</div>
    </div>)
}))
}

export default Accordian;