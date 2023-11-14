import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeBillingDetails } from "../utils/apis";

const BillingDetailsCard = ({
  setUseThisBillingAddress: { setUseThisBillingAddress, setErrMsg2 },
}) => {
  const {
    userObj,
    userObj: { billingDetails },
  } = useSelector((state) => state.login);
  const [billingAddress, setBillingAddress] = useState(null);
  const dispatch = useDispatch();
  const handleDeleteThisAddress = (item) => {
    dispatch(removeBillingDetails({ item, userObj }));
  };
  const handleUseThisAddress = (item) => {
    setBillingAddress(item);
    setUseThisBillingAddress(item);
    setErrMsg2(false);
  };
  console.log(billingAddress);
  return (
    <div className="mt-3 mx-3">
      <h3 className="fs-3 text-center mb-3">SELECT BILLING ADDRESS</h3>
      <Row sm="1" md="1" lg="1">
        {userObj && billingAddress === null ? (
          billingDetails.map((item) => (
            <Col className="mb-3">
              <Card key={item.fullname} className="border border-3 rounded">
                <Card.Body>
                  <Card.Text className="fw-semibold">
                    name: <span className="fw-normal">{item.fullname}, </span>
                    mobile: <span className="fw-normal">{item.mobile}, </span>
                    email: <span className="fw-normal">{item.email}</span>
                  </Card.Text>
                  {/* <Card.Text className="fw-semibold">
                    mobile: <span className="fw-normal">{item.mobile}</span>
                  </Card.Text>
                  <Card.Text className="fw-semibold">
                    email: <span className="fw-normal">{item.email}</span>
                  </Card.Text> */}
                  <Card.Text className="fw-semibold">
                    Delevery Address:{" "}
                    <span className="fw-normal">{item.streetaddress}</span>
                  </Card.Text>
                  <Card.Text className="fw-semibold">
                    <span className="fw-normal">
                      {item.city} - {item.pincode},
                    </span>{" "}
                    <span className="fw-normal">
                      {item.state}-{item.country}
                    </span>
                  </Card.Text>
                  {/* <Card.Text className="fw-semibold">
                    <span className="fw-normal">
                      {item.state}-{item.country}
                    </span>
                  </Card.Text> */}
                  <div className="d-flex ">
                    <Button
                      variant="dark"
                      className="mybutton "
                      onClick={() => handleUseThisAddress(item)}
                    >
                      use this address
                    </Button>
                    <Button
                      variant="dark"
                      className="mybutton ms-auto"
                      onClick={() => handleDeleteThisAddress(item, userObj)}
                    >
                      remove this address
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="mb-3">
            <Card className="border border-3 rounded">
              <Card.Body>
                <Card.Text className="fw-semibold">
                  name:{" "}
                  <span className="fw-normal">{billingAddress.fullname}, </span>
                  mobile:{" "}
                  <span className="fw-normal">{billingAddress.mobile}, </span>
                  email:{" "}
                  <span className="fw-normal">{billingAddress.email}</span>
                </Card.Text>

                <Card.Text className="fw-semibold">
                  Delevery Address:{" "}
                  <span className="fw-normal">
                    {billingAddress.streetaddress}
                  </span>
                </Card.Text>
                <Card.Text className="fw-semibold">
                  <span className="fw-normal">
                    {billingAddress.city} - {billingAddress.pincode},
                  </span>{" "}
                  <span className="fw-normal">
                    {billingAddress.state}-{billingAddress.country}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              className="mybutton mt-3"
              variant="dark"
              onClick={() => setBillingAddress(null)}
            >
              use other address
            </Button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default BillingDetailsCard;
