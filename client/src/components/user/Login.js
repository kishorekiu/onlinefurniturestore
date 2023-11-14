import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogin } from "../utils/apis";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Login = () => {
  const { isSuccess, isErr, errMsg } = useSelector((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormSubmit = (userObj) => {
    dispatch(userLogin(userObj));
  };
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);
  return (
    <>
      <Row className="mt-5">
        <Col className="col-xs-4 col-sm-6 col-md-6 col-lg-4 mx-auto p-4 rounded border">
          <h3 className="fs-3 text-center text-dark ">Login</h3>
          {isErr === true && (
            <h4
              className="text-danger text-center mb-3"
              id="errMsg"
              data-testid="errMsg"
            >
              {errMsg}
            </h4>
          )}
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                // id="email"
                name="email"
                className="shadow-none"
                {...register("email", {
                  required: true,
                })}
                type="email"
                placeholder="Enter email"
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">please enter email</p>
              )}
              {/* {errors.email?.type === "pattern" && (
                <p className="text-danger">pattern allowed [0-9a-zA-Z@]</p>
              )} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                // id="password"
                name="password"
                className="shadow-none"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 15,
                  //   pattern: /^[a-zA-Z0-9!@#$%^&*]{4,16}$/,
                })}
                type="password"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-danger">please enter password</p>
              )}
              {/* {errors.password?.type === "minLength" && (
                <p className="text-danger">min length 4 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-danger">max length 16 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-danger">
                  pattern allowed [a-zA-Z0-9!@#$%^&*]
                </p>
              )} */}
            </Form.Group>
            <Row>
              <Col>
                <Button
                  className="shadow-none dark-button mybutton"
                  variant="dark"
                  type="submit"
                >
                  Login
                </Button>
              </Col>
              <Col>
                <Nav className="ms-auto">
                  <NavLink
                    to="/register"
                    className="nav-link text-dark mb-3 d-block text-right"
                  >
                    new Here, Register
                  </NavLink>
                </Nav>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
