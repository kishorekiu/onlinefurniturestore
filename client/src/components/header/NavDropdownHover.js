import { useRef, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavDropdownHover = ({ data: { productCategory, productType } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 20);
  };
  return (
    <div>
      <NavDropdown
        className="fs-5"
        title={productCategory}
        id="basic-nav-dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        show={isOpen}
      >
        {productType.map((prodType, index) => (
          <>
            <NavDropdown.Item key={prodType}>
              <NavLink
                to={`/${productCategory}/${prodType}`}
                className="nav-link text-dark text-center"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {prodType}
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </>
        ))}
        {/* <NavDropdown.Item>
          <NavLink to="/livingroom/sofa">{one}</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>
          <NavLink to="/livingroom/tvcabinet">{two}</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>{three}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>{four}</NavDropdown.Item> */}
      </NavDropdown>
    </div>
  );
};

export default NavDropdownHover;
