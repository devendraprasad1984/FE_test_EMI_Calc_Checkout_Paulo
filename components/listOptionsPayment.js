import React from "react";
import config from "../config";

const ListOptionPayments=props=>{
  const {title, amount} = props
  return <>
    <div className='row border pad20'>
      <option value={title}>{title}</option>
      <span>{config.symbols.euro} {config.formatters.euroCurrencyFormatter(amount)}</span>
    </div>
  </>
}

export default ListOptionPayments