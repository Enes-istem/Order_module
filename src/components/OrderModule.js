
import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Order from './Order'
import OrderListeleme from './OrderListeleme'
import OrderOlusturma from './OrderOlusturma'



const OrderModule = (props) => {
  
  // console.log("userContextDısaridan : ", props);
  // const [datas,setDatas] = useState([{name: "enes", surname: "iştem"}])


  return (
  
    <>
      <Route exact path = "/order" component = {Order} />
      <Route exact path = "/order/listeleme" component = {OrderListeleme} />
     <Route exact path = "/order/olusturma" component = {OrderOlusturma} />
       
</>
    
  );
};

export default OrderModule;

