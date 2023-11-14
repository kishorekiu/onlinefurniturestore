import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import BillingDetailsForm from "./BillingDetailsForm";
import CheckoutCart from "./CheckoutCart";
import { useDispatch, useSelector } from "react-redux";
import BillingDetailsCard from "./BillingDetailsCard";
import { onClearCart, onPlaceOrder } from "../utils/apis";
import { useNavigate } from "react-router-dom";
// import DateTime from "../utils/DateTime";
// import NumberFormat from "../utils/NumberFormat";

const Checkout = () => {
  const { userObj } = useSelector((state) => state.login);
  const [isAddNewAddress, setIsAddNewAddress] = useState(false);
  const [billingAddress, setUseThisBillingAddress] = useState(null);
  const [errMsg1, setErrMsg1] = useState(false);
  const [errMsg2, setErrMsg2] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [totalSum, setTotalSum] = useState(0);
  const [formattedTotalSum, setFormattedTotalSum] = useState("");
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    if (userObj.billingDetails.length === 0) {
      setErrMsg1(true);
      setErrMsg2(false);
    } else if (billingAddress === null) {
      setErrMsg2(true);
      setErrMsg1(false);
    } else {
      dispatch(
        onPlaceOrder({
          userObj,
          billingAddress,
          orderTotals: formattedTotalSum,
          orderDateTime: {
            day: currentDate.getDate(),
            dayName: dayNames[currentDate.getDay()],
            month: currentDate.toLocaleDateString(undefined, { month: "long" }),
            year: currentDate.toLocaleDateString(undefined, {
              year: "numeric",
            }),
            hour: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
          },
        })
      );
      dispatch(onClearCart(userObj));
      setErrMsg1(false);
      setErrMsg2(false);
      navigate("/order-placed-successfully");
    }
  };

  useEffect(() => {
    if (userObj) {
      const sum = userObj.cartItems.map(
        (eachitem) =>
          parseInt(eachitem.item.price.replace(/,/g, "")) * eachitem.count
      );
      let totalSumm = 0;
      sum.forEach((value) => {
        // setTotalSum(totalSum + value);
        totalSumm += value;
      });
      setTotalSum(totalSumm);
      const formattedSum = totalSumm.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });

      setFormattedTotalSum(formattedSum);
    }
  }, [setTotalSum, userObj]);
  return (
    <div className="mt-3 mx-3 mb-5">
      <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">Checkout</h1>
      </Row>
      <Row sm="1" md="1" lg="2" className="mt-3 mx-3">
        {userObj.billingDetails &&
        userObj.billingDetails.length > 0 &&
        isAddNewAddress === false ? (
          <>
            <Col className="">
              <BillingDetailsCard
                setUseThisBillingAddress={{
                  setUseThisBillingAddress,
                  setErrMsg2,
                }}
              />
              <Button
                className="mybutton mt-3 "
                variant="dark"
                onClick={() => {
                  setUseThisBillingAddress(null);
                  setIsAddNewAddress(true);
                }}
              >
                add new address
              </Button>
            </Col>
          </>
        ) : (
          <>
            <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-5 mx-auto p-4 rounded border">
              <BillingDetailsForm
                setIsAddNewAddress={{ setIsAddNewAddress, setErrMsg1 }}
              />
              {userObj.billingDetails.length > 0 && (
                <Button
                  className="mybutton mt-3 "
                  variant="dark"
                  onClick={() => setIsAddNewAddress(false)}
                >
                  use existing address
                </Button>
              )}
            </Col>
          </>
        )}

        <Col className="d-flex flex-column">
          <CheckoutCart />
          <Button
            className="mybutton"
            variant="dark"
            onClick={handlePlaceOrder}
            disabled={userObj.cartItems.length === 0 ? true : false}
          >
            Place Order
          </Button>
          {/* {currentDateTime && <p>{currentDateTime.toLocalString()}</p>} */}
          {errMsg1 && (
            <h3 className="text-danger text-center">
              please, Add Billing Details
            </h3>
          )}
          {errMsg2 && (
            <h3 className="text-danger text-center">
              please select billing address
            </h3>
          )}
          {/* {currentDateTime !== null && (
            <h3>{currentDateTime.toLocaleString()}</h3>
          )} */}
          {/* <DateTime /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
