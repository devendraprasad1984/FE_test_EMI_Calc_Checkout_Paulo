import { getFromApiAsync } from "../apis/get";
import config from "../config";
import ListDisplay from "../components/listDisplay";
import React from "react";

export default function ({ data, ssr_title }) {
  return (
    <>
      <ListDisplay list={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getFromApiAsync(config.endpoints.summary);
  return {
    revalidate: config.revalidateTime,
    props: {
      data,
    },
  };
}
