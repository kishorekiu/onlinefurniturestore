import React from "react";
import { Card, Carousel, Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddToCartIcon from "../cart/AddToCartIcon";
import NumberFormat from "./NumberFormat";

const ProductDetails = () => {
  const { currentProduct } = useSelector((state) => state.product);
  return (
    <div className="mt-3 mx-3">
      {currentProduct && (
        <Row xs="1" sm="1" md="1" lg="2" className="">
          <Col className="flex">
            <Carousel interval={3000} slide={false} data-bs-theme="dark">
              <Carousel.Item className="image-zoom-container">
                <Image
                  fluid
                  style={{ height: "32rem", width: "32rem" }}
                  src={currentProduct.images.one}
                  alt={currentProduct.title}
                  className="zoomable-image"
                />
              </Carousel.Item>
              <Carousel.Item className="image-zoom-container">
                <Image
                  fluid
                  style={{ height: "32rem", width: "32rem" }}
                  src={currentProduct.images.two}
                  className="zoomable-image"
                />
              </Carousel.Item>
              <Carousel.Item className="image-zoom-container">
                <Image
                  fluid
                  style={{ height: "32rem", width: "32rem" }}
                  src={currentProduct.images.three}
                  className="zoomable-image"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text className="fs-3">{currentProduct.title}</Card.Text>
                <Card.Text className="fs-3">
                  <NumberFormat
                    value={parseInt(currentProduct.price.replace(/,/g, ""))}
                  />
                </Card.Text>
                <Card.Text className="text-dark fs-3 fw-bold">
                  Finish:{" "}
                  <span className="fw-normal">{currentProduct.finish}</span>
                </Card.Text>
                <Card.Text className="text-dark fs-3 fw-bold">
                  Size: <span className="fw-normal">{currentProduct.size}</span>
                </Card.Text>
                <Card.Text className="text-dark fs-3 fw-bold">
                  Wood Used:{" "}
                  <span className="fw-normal">{currentProduct.woodUsed}</span>
                </Card.Text>
                <Card.Text>
                  <AddToCartIcon data={{ item: currentProduct }} />{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetails;
