import React from "react";
import config from "../config";

const ListOptionPayments = props => {
  const {optionPayments, groupName, title, amount, optionClick} = props

  const RowOption =props=> <div className='row border pad20'>
    <div onClick={props.optionClick}>
      <input type='radio' value={props.title} name={groupName}/>
      <span>{props.title}</span>
    </div>
    <span>{config.formatters.euroCurrencyFormatter(props.amount)}</span>
  </div>

  return <>
    {title && amount && <RowOption />}

    {optionPayments && optionPayments.map((option, i)=>{
      return <RowOption {...option}/>
    })}
  </>
}

export default ListOptionPayments