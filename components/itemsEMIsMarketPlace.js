import React from "react";
import ListOptionPayments from "./listOptionsPayment";

const ItemsEMIsMarketPlace=props=>{
  return <>
    <div className='column pad20'>
      <span>Choose your items</span>
      <ListOptionPayments title={'1 payment due'} amount={43217.02}/>
      <ListOptionPayments title={'2 payment due'} amount={21635.51}/>
      <ListOptionPayments title={'3 payment due'} amount={14423.67}/>
    </div>
  </>
}

export default ItemsEMIsMarketPlace