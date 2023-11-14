import React from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import NumberFormat from "../utils/NumberFormat";

const MyOrders = () => {
  const {
    userObj,
    userObj: { orders },
  } = useSelector((state) => state.login);

  // useEffect(() => {
  //   if (userObj) {
  //     const sum = userObj.cartItems.map(
  //       (eachitem) =>
  //         parseInt(eachitem.item.price.replace(/,/g, "")) * eachitem.count
  //     );
  //     let totalSumm = 0;
  //     sum.forEach((value) => {
  //       // setTotalSum(totalSum + value);
  //       totalSumm += value;
  //     });
  //     setTotalSum(totalSumm);
  //   }
  // }, [setTotalSum, userObj]);
  return (
    <div className="mt-3 mx-3 mb-5">
      <Row className="bg-dark d-flex flex">
        <h1 className="fs-2  text-white text-center m-3">My Orders</h1>
      </Row>
      <Row xs="1" className="mt-3 mx-5">
        {orders &&
          orders.map((eachItem) => (
            <Col sm={10} key={eachItem} className="mb-3">
              <Card className="light-grey-bg p-3">
                <Row className="mb-3 pb-3 border-bottom">
                  <Col sm={3}>
                    <Card.Text style={{ fontSize: "0.9rem" }}>
                      ORDER PLACED <br />
                      <span
                        className="fs-6 fw-semibold"
                        style={{ fontSize: "1rem" }}
                      >
                        {eachItem.orderDateTime.day}{" "}
                        {eachItem.orderDateTime.month}{" "}
                        {eachItem.orderDateTime.year}
                      </span>
                    </Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Card.Text style={{ fontSize: "0.9rem" }}>
                      TOTAL <br />
                      <span
                        className="fs-6 fw-semibold"
                        style={{ fontSize: "1rem" }}
                      >
                        {eachItem.orderTotals}
                      </span>
                    </Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Card.Text style={{ fontSize: "0.9rem" }}>
                      SHIP TO <br />{" "}
                      <span
                        className="fs-6 fw-semibold"
                        style={{ fontSize: "1rem" }}
                      >
                        {" "}
                        <Dropdown>
                          <Dropdown.Toggle
                            style={{ all: "unset" }}
                            // variant="success"
                            id="dropdown-basic"
                          >
                            {eachItem.billingAddress.fullname}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <div>
                                <p className="fw-bold">
                                  {eachItem.billingAddress.fullname}
                                </p>
                                <p>{eachItem.billingAddress.streetaddress}</p>
                                <p>
                                  {eachItem.billingAddress.city},{" "}
                                  {eachItem.billingAddress.state}
                                </p>
                                <p>{eachItem.billingAddress.pincode}</p>
                                <p>{eachItem.billingAddress.country}</p>
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                    </Card.Text>
                  </Col>
                  <Col sm={3} className="d-flex">
                    <Card.Text className="" style={{ fontSize: "0.9rem" }}>
                      ORDER <br />{" "}
                      <span
                        className="fw-semibold"
                        style={{ fontSize: "1rem" }}
                      >
                        {" "}
                        View order details
                      </span>
                    </Card.Text>
                  </Col>
                  <Col sm={2}>
                    <Button variant="danger" className="mybutton ml-3">
                      Cancel Order
                    </Button>
                  </Col>
                </Row>
                {eachItem.items.map((eachCartItem) => (
                  <Row key={eachCartItem} className="mb-3">
                    <Col sm={12}>
                      <Card className="p-3" style={{ backgroundColor: "#fff" }}>
                        <h3 className="fs-5 text-success">
                          Arriving Next {eachItem.orderDateTime.dayName}
                        </h3>
                        <Row>
                          <Col sm="auto">
                            <Card.Img
                              src={eachCartItem.item.images.one}
                              style={{ height: "6rem", width: "6rem" }}
                            />
                          </Col>
                          <Col sm="auto">
                            <Card.Text style={{ cursor: "pointer" }}>
                              {eachCartItem.item.title}
                            </Card.Text>
                            <Card.Text>
                              Price:
                              <span className="fw-semibold ">
                                {eachCartItem.item.price}
                              </span>{" "}
                              <br />
                              Units:{" "}
                              <span className="fw-semibold">
                                {eachCartItem.count}
                              </span>
                            </Card.Text>
                          </Col>
                          <Col
                            // sm={{ offset: "auto" }}
                            className="d-flex align-middle flex"
                          >
                            <Card.Text>
                              Total:{" "}
                              <span className="fs-4 fw-semibold">
                                <NumberFormat
                                  value={
                                    parseInt(
                                      eachCartItem.item.price.replace(/,/g, "")
                                    ) * eachCartItem.count
                                  }
                                />
                              </span>
                            </Card.Text>
                          </Col>
                          <Col className="d-flex flex-column">
                            <Button variant="light" className="mybutton mb-3 ">
                              Track Package
                            </Button>
                            <Button variant="light" className="mybutton">
                              Cancel Item
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                ))}
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MyOrders;
