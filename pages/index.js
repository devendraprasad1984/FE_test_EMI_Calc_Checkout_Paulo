import {getFromApiAsync} from "../apis/get";
import config from "../config";
import React from "react";
import TransactionSummary from "../components/transactionSummary";
import ItemsEMIsMarketPlace from "../components/itemsEMIsMarketPlace";

export default function ({data, ssr_title}) {
  return (
    <>
      {/*<ListDisplay list={data} />*/}
      <div className={["row"].join(' ')}>
        <div className='wid40 leftPanel pad20'><TransactionSummary/></div>
        <div className='wid60'><ItemsEMIsMarketPlace/></div>
      </div>


    </>
  );
}

export async function getStaticProps() {
  const data = await getFromApiAsync(config.endpoints.home);
  return {
    revalidate: config.revalidateTime,
    props: {
      data,
    },
  };
}
