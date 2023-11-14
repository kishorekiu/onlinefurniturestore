import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductBasicDetails from "../../utils/ProductBasicDetails";
const BookShelf = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="mt-3 mx-3">
      <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">Book Shelfs</h1>
      </Row>
      {products && (
        <>
          <Row xs="1" sm="2" md="3" lg="4" className="mt-4 px-2">
            {products.livingRoom.bookShelf.map((item, index) => (
              <Col key={index}>
                <ProductBasicDetails
                  data={{
                    item,
                    productCategory: "livingRoom",
                    productType: "bookShelf",
                  }}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default BookShelf;
