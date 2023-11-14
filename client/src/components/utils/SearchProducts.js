import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductBasicDetails from "./ProductBasicDetails";

const SearchProducts = () => {
  const { products } = useSelector((state) => state.product);
  const [searchText, setSearchText] = useState("");
  //   const [filteredProducts, setFilteredProducts] = useState([]);

  const filtered = [];
  for (const category in products) {
    if (
      typeof products[category] === "object" &&
      !Array.isArray(products[category])
    ) {
      for (const type in products[category]) {
        const categoryProducts = products[category][type];
        const filteredCategoryProducts = categoryProducts.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        filtered.push(...filteredCategoryProducts);
      }
    }
  }
  //   setFilteredProducts(filtered);

  return (
    <div className="mt-3 mx-3">
      <Row className="flex bg-dark">
        <input
          type="text"
          placeholder="search products..."
          //   className="fs-2 text-white"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // handleSearch();
          }}
          className="fs-2  text-white bg-dark text-center m-3"
        />
        {/* <Col>
          <Button title="search" variant="dark" onClick={handleSearch} />
        </Col> */}
      </Row>
      {searchText !== "" ? (
        <>
          {filtered.length > 0 ? (
            <>
              <Row xs="1" sm="2" md="3" lg="4">
                {filtered.map((item, index) => (
                  <Col key={index}>
                    <ProductBasicDetails
                      data={{
                        item,
                        productCategory: `${item.productCategory}`,
                        productType: `${item.productType}`,
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <Row className="flex m-3">
              <p className="fs-3 text-center">No matching results found</p>
            </Row>
          )}
        </>
      ) : (
        <Row className="flex m-3">
          <p className="fs-3 text-center">start typing to search products</p>
        </Row>
      )}
    </div>
  );
};

export default SearchProducts;
