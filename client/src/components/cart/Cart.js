import React, { useEffect, useState } from "react";
import {
  Button,
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

const Cart = () => {
  const {
    userObj,
    userObj: { cartItems },
  } = useSelector((state) => state.login);
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
      <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">Shopping Cart</h1>
      </Row>
      <Row sm="1" md="1" lg="1" className="mt-4 px-2">
        <Col className="mb-3">
          {userObj && userObj.cartItems.length !== 0 ? (
            <Table>
              <thead>
                <tr>
                  <th colSpan={3} className="fs-5 fw-normal text-center">
                    PRODUCT
                  </th>
                  <th className="fs-5 fw-normal">PRICE</th>
                  <th className="fs-5 fw-normal">QUANTITY</th>
                  <th className="fs-5 fw-normal">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {userObj &&
                  userObj.cartItems.map((cartItem, index) => (
                    <tr
                      key={cartItem.item.title}
                      className="align-middle text-center"
                    >
                      <td
                        onClick={() => {
                          dispatch(
                            removeItemFromCart({ item: cartItem.item, userObj })
                          );
                        }}
                      >
                        <OverlayTrigger overlay={tooltip} placement="top">
                          <i className="bi bi-x fs-1"></i>
                        </OverlayTrigger>
                      </td>

                      <td>
                        <Image
                          fluid
                          style={{ height: "6rem", width: "6rem" }}
                          src={cartItem.item.images.one}
                        />
                      </td>

                      <td
                        className="fw-semibold cursor-pointer"
                        style={{ fontSize: "1rem", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(addToCurrentProduct(cartItem.item));
                          navigate(
                            `/${cartItem.item.productCategory}/${cartItem.item.productType}/${cartItem.item.title}`
                          );
                        }}
                      >
                        {cartItem.item.title}
                      </td>

                      <td>
                        <NumberFormat
                          value={parseInt(
                            cartItem.item.price.replace(/,/g, "")
                          )}
                        />
                      </td>

                      <td>
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
                      </td>

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
          ) : (
            <NavLink to="/" className="nav-link text-dark text-center my-5">
              continue shopping
            </NavLink>
          )}
        </Col>
        <Col className="flex">
          {userObj.cartItems.length !== 0 && (
            <div
              className="border border-2 rounded p-3 flex flex-column"
              style={{ width: "25rem" }}
            >
              <Table>
                <thead className="my-3">
                  <tr className="mb-3">
                    <th colSpan={2} className="fs-5 fw-normal text-center">
                      CART TOTALS
                    </th>
                  </tr>
                </thead>
                <tbody className="mt-3">
                  <tr className="my-3">
                    <td>Subtotal</td>
                    <td className="ms-auto">
                      <NumberFormat value={totalSum} />
                    </td>
                  </tr>
                  <tr className="my-3">
                    <td>Shipping Charges</td>
                    <td className="ms-auto">free Shipping</td>
                  </tr>
                  <tr className="my-3">
                    <td>Total</td>
                    <td className="ms-auto">
                      <NumberFormat value={totalSum} />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                variant="dark mybutton"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
