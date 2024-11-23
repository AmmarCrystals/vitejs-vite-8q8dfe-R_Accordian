import React from "react";
import { useState, useEffect } from "react";
import Accordian from "./Accordian";
import '../index.css';


const Getdata =() =>{
  const [sendData, setSendData]=useState([])

 useEffect(()=>{
fetchData()
 },[]);

async function fetchData(){
  const one = await fetch("https://fakestoreapi.com/products");
  const two = await one.json();
  setSendData(two)

 
  return sendData;
}
return <Accordian data={sendData}/>


}
export default Getdata;
