import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductBasicDetails from "../utils/ProductBasicDetails";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  const { userObj } = useSelector((state) => state.login);
  return (
    <div className="mt-3 mx-3">
      <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">Wishlist</h1>
      </Row>
      {userObj && (
        <>
          {userObj.favouriteItems.length !== 0 ? (
            <Row xs="1" sm="2" md="3" lg="4">
              {userObj.favouriteItems.map((item, index) => (
                <Col key={index}>
                  <ProductBasicDetails
                    data={{
                      item,
                      productCategory: `${item.productCategory}`,
                      productType: `${item.productType}`,
                    }}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="flex">
              <NavLink to="/" className="nav-link text-dark text-center my-5">
                continue shopping
              </NavLink>
            </Row>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
