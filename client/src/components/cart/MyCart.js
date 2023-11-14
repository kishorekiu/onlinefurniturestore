import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const MyCart = () => {
  const { userObj } = useSelector((state) => state.login);
  return (
    <div>
      <Row className="bg-dark flex p-3" xs="auto">
        <Col className="mx-3">
          <NavLink
            className="fs-2 text-white text-center nav-link"
            to="/mycart/cart"
          >
            Shopping Cart
          </NavLink>
        </Col>
        <Col className="mx-3">
          <NavLink
            className="fs-2 text-white text-center nav-link"
            to="/mycart/checkout"
          >
            Checkout
          </NavLink>
        </Col>
        <Col className="mx-3">
          <NavLink
            className="fs-2 text-white text-center nav-link"
            to="/mycart/ordercomplete"
          >
            Order Complete
          </NavLink>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
};

export default MyCart;
