import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBillingDetails } from "../utils/apis";

const BillingDetailsForm = ({
  setIsAddNewAddress: { setIsAddNewAddress, setErrMsg1 },
}) => {
  const { userObj } = useSelector((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onFormSubmit = (billingDetailsObj) => {
    dispatch(addBillingDetails({ billingDetailsObj, userObj }));
    // if (userObj.billingDetails.length === 0) {
    // }
    setIsAddNewAddress(false);
    setErrMsg1(false);
    // console.log(billingDetailsObj);
  };
  // const sendData = () => {
  //   const data = true;
  // };
  return (
    <div>
      <h3 className="fs-3 text-center text-dark mb-3 ">Add Billing Details</h3>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            // id="email"
            name="fullname"
            className="shadow-none"
            {...register("fullname", {
              required: true,
            })}
            type="text"
            // placeholder="Enter full name"
          />
          {errors.fullname?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="streetaddress">
          <Form.Label>Street address</Form.Label>
          <Form.Control
            // id="email"
            name="streetaddress"
            className="shadow-none"
            {...register("streetaddress", {
              required: true,
            })}
            type="text"
            placeholder="House number and street name"
          />
          {errors.streetaddress?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>Town / City</Form.Label>
          <Form.Control
            // id="email"
            name="city"
            className="shadow-none"
            {...register("city", {
              required: true,
            })}
            type="text"
            // placeholder=""
          />
          {errors.city?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control
            // id="email"
            name="state"
            className="shadow-none"
            {...register("state", {
              required: true,
            })}
            type="text"
            // placeholder=""
          />
          {errors.state?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="pincode">
          <Form.Label>PIN Code</Form.Label>
          <Form.Control
            // id="email"
            name="pincode"
            className="shadow-none"
            {...register("pincode", {
              required: true,
            })}
            type="number"
            // placeholder=""
          />
          {errors.pincode?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Country</Form.Label>
          <Form.Control
            // id="email"
            name="country"
            className="shadow-none"
            {...register("country", {
              required: true,
            })}
            type="text"
            // placeholder="India"
          />
          {errors.country?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="mobilenumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            // id="email"
            name="mobilenumber"
            className="shadow-none"
            {...register("mobile", {
              required: true,
            })}
            type="tel"
            // placeholder=""
          />
          {errors.mobile?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            // id="email"
            name="email"
            className="shadow-none"
            {...register("email", {
              required: true,
            })}
            type="email"
            // placeholder=""
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">this field is required</p>
          )}
        </Form.Group>
        <Button
          type="submit"
          className="mybutton"
          variant="dark"
          // onClick={sendData}
        >
          Add Billing Address
        </Button>
      </Form>
    </div>
  );
};

export default BillingDetailsForm;
