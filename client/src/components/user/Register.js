import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
// import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { userRegistration } from "../utils/apis";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (userObj) => {
    const response = await userRegistration(userObj);
    try {
      if (response.message === "User Created") {
        navigate("/login");
      } else {
        setErrMsg(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Row className="mt-5">
        <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-4 mx-auto p-3 rounded border">
          <h3
            className="fs-3 text-dark text-center mb-3"
            data-testid="textNode"
          >
            Register
          </h3>
          <h4
            className="text-danger text-center mb-3"
            id="errMsg"
            data-testid="errMsg"
          >
            {errMsg}
          </h4>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                className="shadow-none"
                type="text"
                placeholder="Enter username"
                {...register("username", {
                  required: true,
                  minLength: 4,
                  maxLength: 15,
                })}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger">please enter username</p>
              )}
              {errors.username?.type === "minLength" && (
                <p className="text-danger">min 4 chars required</p>
              )}
              {errors.username?.type === "maxLength" && (
                <p className="text-danger">max 15 allowed only</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                className="shadow-none"
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">please enter email</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                className="shadow-none"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 15,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger">Please enter password</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-danger"> min 4 chars required</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-danger">max 15 allowed only</p>
              )}
            </Form.Group>
            <Row>
              <Col>
                <Button
                  variant="dark"
                  type="submit"
                  className="shadow-none dark-button mybutton"
                >
                  Submit
                </Button>
              </Col>
              <Col>
                <Nav className="ms-auto">
                  <NavLink
                    to="/login"
                    className="nav-link text-dark mb-3 d-block text-right"
                    data-testid="linkNode"
                  >
                    Already a user, Login
                  </NavLink>
                </Nav>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
