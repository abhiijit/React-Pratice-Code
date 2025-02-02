import React, { useState, useEffect } from "react";
import './PaginationProduct.css'

const Product = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(15);
  const start = currentPage * rowPerPage;
  const end = start - rowPerPage;
  const currentItems = product?.slice(end, start);
  const totProdImages = Math.ceil(product.length / rowPerPage)

  const fetchProducts = async () => {
    try {
      const resProd = await fetch("https://dummyjson.com/products");
      const data = await resProd.json();
      setProduct(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const getCurrentPage = (num) => {
    setCurrentPage(num)
  }

  return (
    <>
    <div className="image-grid">
      {currentItems?.map((image) => {
        return (
          <>
            <img src={`${image.images[0]}`} alt={`${image.title}`} width="300" />
          </>
        );
      })}
      </div>
      <div class="pagination">
      <button class="page-item" disabled={currentPage === 1} onClick={handlePrev}>Prev</button>
      {Array.from({length:totProdImages}, (_, index) => (
        <>
        <button class="page-item"  onClick={() => getCurrentPage(index + 1)}>{index + 1}</button>
        </>
      ))}
      <button class="page-item" disabled={currentPage === totProdImages} onClick={handlePrev}>Next</button>
      </div>
    </>
  );
};

export default Product;
