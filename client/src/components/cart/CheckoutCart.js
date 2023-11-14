import React, { useEffect, useState } from "react";
import {
  Col,
  Image,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCurrentProduct } from "../../redux/slices/productSlice";
import {
  IncrementItemQuantity,
  decrementItemQuantity,
  removeItemFromCart,
} from "../utils/apis";
import NumberFormat from "../utils/NumberFormat";

const CheckoutCart = () => {
  const { userObj } = useSelector((state) => state.login);
  const [totalSum, setTotalSum] = useState(0);
  // const [latestUserObj, setLatestUserObject] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tooltip = <Tooltip id="tooltip">remove item from cart</Tooltip>;
  const tooltip1 = <Tooltip id="tooltip1">Decrease item quantity</Tooltip>;
  const tooltip2 = <Tooltip id="tooltip2">Increase item quantity</Tooltip>;

  const handleIncrementItemQuantity = ({ cartItem, userObj }) => {
    dispatch(IncrementItemQuantity({ cartItem, userObj }));
  };
  const handleDecrementItemQuantity = ({ cartItem, userObj }) => {
    if (cartItem.count <= 1) {
      dispatch(removeItemFromCart({ item: cartItem.item, userObj }));
    } else {
      dispatch(decrementItemQuantity({ cartItem, userObj }));
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
    }
  }, [setTotalSum, userObj]);
  return (
    <div className="mt-3 mx-3">
      {/* <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">Shopping Cart</h1>
      </Row> */}
      <h3 className="fs-3 text-center mb-3">YOUR ORDER</h3>
      <Row sm="1" md="1" lg="1" className="mt-4 px-2">
        <Col className="mb-3">
          {userObj && userObj.cartItems.length !== 0 ? (
            <>
              <Table>
                <thead>
                  <tr>
                    <th colSpan={3} className="fs-5 fw-normal ">
                      PRODUCT
                    </th>
                    <th className="fs-5 fw-normal">SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {userObj &&
                    userObj.cartItems.map((cartItem, index) => (
                      <tr
                        key={cartItem.item.title}
                        className="align-middle text-center mb-3"
                      >
                        <td
                          onClick={() => {
                            dispatch(
                              removeItemFromCart({
                                item: cartItem.item,
                                userObj,
                              })
                            );
                          }}
                        >
                          <OverlayTrigger overlay={tooltip} placement="top">
                            <i className="bi bi-x fs-2"></i>
                          </OverlayTrigger>
                        </td>

                        <td>
                          <Image
                            fluid
                            style={{ height: "5rem", width: "8rem" }}
                            src={cartItem.item.images.one}
                          />
                        </td>

                        <td
                          className="fw-semibold cursor-pointer"
                          style={{ fontSize: "1rem" }}
                        >
                          <Row
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              dispatch(addToCurrentProduct(cartItem.item));
                              navigate(
                                `/${cartItem.item.productCategory}/${cartItem.item.productType}/${cartItem.item.title}`
                              );
                            }}
                          >
                            {cartItem.item.title}
                          </Row>
                          <Row>
                            <div className="d-flex align-items-center justify-content-evenly">
                              <OverlayTrigger
                                overlay={tooltip1}
                                placement="top"
                              >
                                <i
                                  className="bi bi-dash fs-2"
                                  onClick={() =>
                                    handleDecrementItemQuantity({
                                      cartItem,
                                      userObj,
                                    })
                                  }
                                ></i>
                              </OverlayTrigger>
                              <span className="fw-semibold">
                                {cartItem.count}
                              </span>
                              <OverlayTrigger
                                overlay={tooltip2}
                                placement="top"
                              >
                                <i
                                  className="bi bi-plus fs-2"
                                  onClick={() =>
                                    // dispatch(
                                    //   decrementItemQuantity({ cartItem, userObj })
                                    // )
                                    handleIncrementItemQuantity({
                                      cartItem,
                                      userObj,
                                    })
                                  }
                                ></i>
                              </OverlayTrigger>
                            </div>
                          </Row>
                        </td>
                        {/* <td>
                        <div className="d-flex align-items-center justify-content-evenly">
                          <OverlayTrigger overlay={tooltip1} placement="top">
                            <i
                              className="bi bi-dash fs-2"
                              onClick={() =>
                                handleDecrementItemQuantity({
                                  cartItem,
                                  userObj,
                                })
                              }
                            ></i>
                          </OverlayTrigger>
                          <span className="fw-semibold">{cartItem.count}</span>
                          <OverlayTrigger overlay={tooltip2} placement="top">
                            <i
                              className="bi bi-plus fs-2"
                              onClick={() =>
                                // dispatch(
                                //   decrementItemQuantity({ cartItem, userObj })
                                // )
                                handleIncrementItemQuantity({
                                  cartItem,
                                  userObj,
                                })
                              }
                            ></i>
                          </OverlayTrigger>
                        </div>
                      </td> */}

                        <td>
                          {/* {cartItem.count * parseInt(cartItem.item.price.replace(/,/g, ""))} */}
                          <NumberFormat
                            value={
                              cartItem.count *
                              parseInt(cartItem.item.price.replace(/,/g, ""))
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <Row
                sm="2"
                className="p-3 align-middle text-center  border-bottom border-1"
              >
                <Col sm="4" className="fw-semibold">
                  Subtotal
                </Col>
                <Col sm={{ span: 4, offset: 4 }} className="ms-auto">
                  <NumberFormat value={totalSum} />
                </Col>
              </Row>
              <Row
                sm="2"
                className="p-3 align-middle text-center  border-bottom border-1"
              >
                <Col sm="4" className="fw-semibold">
                  Shipping Charges
                </Col>
                <Col sm={{ span: 4, offset: 4 }} className="ms-auto">
                  free Shipping
                </Col>
              </Row>
              <Row
                sm="2"
                className="p-3 align-middle text-center  border-bottom border-1"
              >
                <Col sm="4" className="fw-semibold">
                  Payment
                </Col>
                <Col sm={{ span: 4, offset: 4 }} className="ms-auto">
                  Cash on Delevery
                </Col>
              </Row>
              <Row
                sm="2"
                className="p-3 align-middle text-center border-bottom border-1"
              >
                <Col sm="4" className="fw-semibold">
                  Total
                </Col>
                <Col sm={{ span: 4, offset: 4 }} className="ms-auto fs-3">
                  <NumberFormat value={totalSum} className="fs-3" />
                </Col>
              </Row>
            </>
          ) : (
            <NavLink to="/" className="nav-link text-dark text-center my-5">
              continue shopping
            </NavLink>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutCart;
