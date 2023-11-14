import React, { useState } from "react";

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDayOfMonth = () => {
    // Get the current day of the month (1 to 31)
    return currentDate.getDate();
  };

  const getMonthName = () => {
    // Get the current month name
    const options = { month: "long" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getYear = () => {
    // Get the current year
    const options = { year: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };
  return (
    <div>
      {getDayOfMonth()} {getMonthName()} {getYear()}
    </div>
  );
};

export default DateTime;
