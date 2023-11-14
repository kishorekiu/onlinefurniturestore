import React from "react";

const NumberFormat = ({ value }) => {
  // Format the number as Indian currency
  const formattedValue = value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return <span className="indian-currency">{formattedValue}</span>;
};

export default NumberFormat;
