import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItemToFavourite, removeItemFromFavourite } from "../utils/apis";
import { useNavigate } from "react-router-dom";

const AddToFavouriteIcon = ({ data: { item } }) => {
  const {
    userObj,
    userObj: { favouriteItems },
    isSuccess,
  } = useSelector((state) => state.login);

  const [isItemAlreadyAddedToFavourite, setIsItemAlreadyAddedToFavourite] =
    useState(false);

  const tooltip = (
    <Tooltip id="tooltip">
      {isItemAlreadyAddedToFavourite === false
        ? "add to wishlist"
        : "remover from wishlist"}
    </Tooltip>
  );
  const tooltip2 = <Tooltip>please login to add to cart</Tooltip>;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToWishlist = () => {
    dispatch(addItemToFavourite({ item, userObj }));
    setIsItemAlreadyAddedToFavourite(true);
    navigate("/wishlist");
  };
  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromFavourite({ item, userObj }));
    setIsItemAlreadyAddedToFavourite(false);
  };

  useEffect(() => {
    if (favouriteItems) {
      let index = favouriteItems.findIndex(
        (eachItem) => eachItem.title === item.title
      );
      if (index >= 0) {
        setIsItemAlreadyAddedToFavourite(true);
      } else {
        setIsItemAlreadyAddedToFavourite(false);
      }
    }
  }, [setIsItemAlreadyAddedToFavourite, favouriteItems]);

  return (
    <div>
      {isSuccess ? (
        isItemAlreadyAddedToFavourite === false ? (
          <OverlayTrigger placement="top" overlay={tooltip}>
            <i
              className="bi bi-bookmark-plus fs-1"
              onClick={handleAddToWishlist}
              style={{ pointerEvents: isSuccess ? "auto" : "none" }}
            ></i>
          </OverlayTrigger>
        ) : (
          <>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <i
                className="bi bi-bookmark-check-fill fs-1"
                onClick={handleRemoveFromWishlist}
                style={{ pointerEvents: isSuccess ? "auto" : "none" }}
              ></i>
            </OverlayTrigger>
            {/* <Nav>
            </Nav> */}
            {/* <NavLink to="/wishlist" className="nav-link text-dark">
              go to wishlist
            </NavLink> */}
          </>
        )
      ) : (
        <>
          <OverlayTrigger placement="top" overlay={tooltip2}>
            <i
              className="bi bi-bookmark-plus fs-1"
              onClick={() => navigate("/login")}
            ></i>
          </OverlayTrigger>
        </>
      )}
    </div>
  );
};

export default AddToFavouriteIcon;
