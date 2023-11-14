import { Card } from "react-bootstrap";
import AddToCartIcon from "../cart/AddToCartIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCurrentProduct } from "../../redux/slices/productSlice";
import NumberFormat from "./NumberFormat";
import AddToFavouriteIcon from "../user/AddToFavouriteIcon";

const ProductBasicDetails = ({
  data: { item, productCategory, productType },
}) => {
  const { currentProduct } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleVisitCurrentProductDetails = async ({
    item,
    productCategory,
    productType,
  }) => {
    dispatch(addToCurrentProduct(item));
    if (currentProduct)
      navigate(`/${productCategory}/${productType}/${item.title}`);
    // navigate(`/${item.title}`);
  };
  return (
    <>
      {item && (
        <Card>
          <div
            className="image-zoom-container"
            onClick={() => {
              handleVisitCurrentProductDetails({
                item,
                productCategory,
                productType,
              });
            }}
          >
            <Card.Img
              variant="top"
              src={item.images.one}
              alt={item.title}
              className="zoomable-image"
            />
          </div>
          <Card.Body>
            <Card.Title
              className="mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleVisitCurrentProductDetails({
                  item,
                  productCategory,
                  productType,
                });
              }}
            >
              {item.title}
            </Card.Title>

            <div className="d-flex justify-content-between">
              <AddToCartIcon data={{ item }} />
              <span className="text-center d-flex align-items-center text-dark fw-bold fs-4">
                <NumberFormat value={parseInt(item.price.replace(/,/g, ""))} />
              </span>
              <AddToFavouriteIcon data={{ item }} />
              {/* <i className="bi bi-bookmark-plus-fill fs-1"></i> */}
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ProductBasicDetails;
