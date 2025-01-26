import React, { useEffect, useState } from "react";

const PaginationImage = () => {
  const [totImage, setTotImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(20);
  const lastIndexOfImage = currentPage * rowPerPage;
  const firstIndexOfImage = lastIndexOfImage - rowPerPage;
  const currentItems = totImage?.slice(firstIndexOfImage, lastIndexOfImage);
  const totalPages = Math.ceil(totImage?.length / rowPerPage);
  console.log(totImage);
  console.log(currentItems);
  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=0");
        const data = await res.json();
        setTotImage(data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllImages();
  }, []);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getCurrentPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <div className="imageFlex">
        {currentItems?.map((img, index) => (
          <img key={index} src={img.image} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => getCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default PaginationImage;
