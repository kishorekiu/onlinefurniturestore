import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import NavDropdownHover from "./NavDropdownHover";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginStatus } from "../../redux/slices/loginSlice";
import { useRef, useState } from "react";
// import { clearCartItemsStatus } from "../../redux/slices/addToCartSlice";

const Header = () => {
  const { userObj, isSuccess } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  return (
    <div className="border-bottom overflow-hidden">
      <Navbar
        expand="md"
        className=" navbar fixed-top border-bottom light-grey-bg"
      >
        <Container>
          <Navbar.Brand className="fw-b fs-2">
            {/* <NavLink to="/" className="nav-link text-dark">
            </NavLink> */}
            Online-Furniture
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex">
            <Nav className="me-auto d-flex justify-content-evenly">
              <NavLink to="/" className="nav-link fs-5 mx-4">
                Home
              </NavLink>
              <NavDropdownHover
                className="m-3"
                data={{
                  productCategory: "livingRoom",
                  productType: [
                    "sofa",
                    "tvCabinet",
                    "coffeeTable",
                    "bookShelf",
                  ],
                }}
              />
              <NavDropdownHover
                className="m-3"
                data={{
                  productCategory: "bedRoom",
                  productType: [
                    "cupBoard",
                    "mirrorFrame",
                    "dressingTable",
                    "wardrobe",
                  ],
                }}
              />
              <NavDropdownHover
                className="m-3"
                data={{
                  productCategory: "beds",
                  productType: [
                    "kingBed",
                    "queenBed",
                    "singleBed",
                    "doubleBed",
                  ],
                }}
              />
              <NavDropdownHover
                className="m-3"
                data={{
                  productCategory: "study",
                  productType: ["studyTable", "studyChair"],
                }}
              />
              <NavLink to="/search" className="nav-link mx-4">
                <i class="bi bi-search fs-4"></i>
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              {isSuccess ? (
                <>
                  <NavDropdown
                    title={
                      <i class="bi bi-person-fill fs-4">
                        {" "}
                        {" " + userObj.username}
                      </i>
                    }
                    onMouseEnter={() => {
                      clearTimeout(timeoutRef.current);
                      setIsOpen(true);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => {
                        setIsOpen(false);
                      }, 20);
                    }}
                    show={isOpen}
                  >
                    <NavDropdown.Item>
                      <NavLink
                        to={`/${userObj.username}/profile`}
                        className="nav-link text-dark text-center"
                      >
                        Profile
                      </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <NavLink
                        to="/cart"
                        className="nav-link text-dark text-center"
                      >
                        My Cart
                      </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <NavLink to="/wishlist" className="nav-link text-dark">
                        My Wishlist
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink to="/myorders" className="nav-link text-dark">
                        My Orders
                      </NavLink>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item>orders</NavDropdown.Item> */}
                    <NavDropdown.Item>
                      <NavLink
                        to="/login"
                        className="nav-link text-dark text-center"
                        onClick={() => {
                          dispatch(clearLoginStatus());
                          // dispatch(clearCartItemsStatus());
                        }}
                      >
                        Logout
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
