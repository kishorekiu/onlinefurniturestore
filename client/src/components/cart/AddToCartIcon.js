import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../utils/apis";
import { useNavigate } from "react-router-dom";

const AddToCartIcon = ({ data: { item } }) => {
  const {
    userObj,
    userObj: { cartItems },
    isSuccess,
  } = useSelector((state) => state.login);
  // const { cartItems } = useSelector((state) => state.cart);
  const [fill, setFill] = useState(false);
  const [isItemAlreadyAddedToCart, setIsItemAlreadyAddedToCart] =
    useState(false);
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // console.log(isSuccess);
  const tooltip = (
    <Tooltip id="tooltip">
      {isItemAlreadyAddedToCart === false ? "add to cart" : "remover from cart"}
    </Tooltip>
  );
  const tooltip2 = <Tooltip>please login to add to cart</Tooltip>;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    dispatch(addItemToCart({ cartItem: { item: item, count: 1 }, userObj }));
    setIsItemAlreadyAddedToCart(!isItemAlreadyAddedToCart);
    navigate("/cart");
  };
  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart({ item, userObj }));
    setIsItemAlreadyAddedToCart(!isItemAlreadyAddedToCart);
    setFill(!fill);
  };

  useEffect(() => {
    // if (isSuccess) {
    //   setIsUserLoggedIn(!isUserLoggedIn);
    // }
    if (cartItems) {
      let index = cartItems.findIndex(
        (cartItem) => cartItem.item.title === item.title
      );
      if (index >= 0) {
        setIsItemAlreadyAddedToCart(!isItemAlreadyAddedToCart);
      }
    }
  }, [setIsItemAlreadyAddedToCart]);

  return (
    <div>
      {isSuccess ? (
        isItemAlreadyAddedToCart === false ? (
          <OverlayTrigger placement="top" overlay={tooltip}>
            <i
              className="bi bi-cart-plus fs-1"
              onClick={handleAddToCart}
              style={{ pointerEvents: isSuccess ? "auto" : "none" }}
            ></i>
          </OverlayTrigger>
        ) : (
          <>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <i
                className="bi bi-cart-check-fill fs-1"
                onClick={handleRemoveFromCart}
                style={{ pointerEvents: isSuccess ? "auto" : "none" }}
              ></i>
            </OverlayTrigger>
            {/* <Nav>
            </Nav> */}
            {/* <NavLink to="/cart" className="nav-link text-dark">
              go to cart
            </NavLink> */}
          </>
        )
      ) : (
        <>
          <OverlayTrigger overlay={tooltip2} placement="top">
            <i
              className="bi bi-cart-plus fs-1"
              onClick={() => navigate("/login")}
            ></i>
          </OverlayTrigger>
        </>
      )}
    </div>
  );
};

export default AddToCartIcon;
