import React from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const OrderPlacedSuccessfully = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <Row className="bg-dark d-flex flex flex-column my-5">
        <h1 className="fs-3  text-white text-center m-3">
          Order Placed Successfully
        </h1>
      </Row>
      <NavLink className="nav-link text-center fs-4" to="/myorders">
        View Orders
      </NavLink>
    </div>
  );
};

export default OrderPlacedSuccessfully;
