import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductBasicDetails from "../utils/ProductBasicDetails";
const Home = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="mt-3 mx-3">
      <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">Home</h1>
      </Row>
      {products && (
        <div className="mt-3">
          <Row xs="1" sm="2" md="3" lg="4">
            {products.livingRoom.tvCabinet.map((item, index) => (
              <Col key={index}>
                <ProductBasicDetails
                  data={{
                    item,
                    productCategory: "livingRoom",
                    productType: "tvCabinet",
                  }}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Home;
