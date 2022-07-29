import React from "react";
import config from "../../config";
import { getFromApiAsync } from "../../apis/get";
import HeaderLine from "../../core/headeline";
import Payments from "../../components/payment";

const CheckoutPayment = (props) => {
  return (
    <>
      <Payments/>
    </>
  );
};

export async function getStaticProps(context) {
  const { req, res } = context;
  const data = await getFromApiAsync(config.endpoints.checkout);
  return {
    props: {
      data,
    },
  };
}

export default CheckoutPayment;
