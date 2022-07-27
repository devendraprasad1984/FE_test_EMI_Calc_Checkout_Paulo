import React from "react";
import ListOptionPayments from "./listOptionsPayment";
import NavLink from "../core/navLink";

const ItemsEMIsMarketPlace=props=>{
  const optionPayments=[
    {title: '1 payment due', amount:413217.02},
    {title: '2 payment due', amount:413217.02},
    {title: '3 payment due', amount:413217.02},
    {title: '4 payment due', amount:413217.02}
  ]
  return <>
    <div className='column pad20'>
      <span>Choose your items</span>
      <ListOptionPayments groupName='term' optionPayments={optionPayments}/>
      <div>
        <NavLink name={'Continue'} href={''}/>
      </div>
    </div>
  </>
}

export default ItemsEMIsMarketPlace