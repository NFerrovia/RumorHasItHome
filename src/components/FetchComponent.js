import React from "react";
import { useQuery } from "@apollo/client";

const FetchComponent = ({ code }) => {
  const { data: data0, loading: loading0, error: error0 } = useQuery(code);

  console.log({ data0 });

  return <div>FetchComponent</div>;
};

export default FetchComponent;
