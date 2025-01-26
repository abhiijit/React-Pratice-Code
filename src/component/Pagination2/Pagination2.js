import React, { useEffect, useState } from "react";

const Pagination2 = () => {
  const [tblData, setTblData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPage] = useState(10);
  const lastIndexOfPage = currentPage * rowsPerPage;
  const firstIndexOfPage = lastIndexOfPage - rowsPerPage;
  const currentItems = tblData?.slice(firstIndexOfPage, lastIndexOfPage);
  const totalPages = Math.ceil(tblData?.length / rowsPerPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=0");
        const data = await res.json();
        setTblData(data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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
      <h1>Machine Round Pagination</h1>
      <div class="table">
        <table className="table">
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td style={{ width: "50px" }}>{item.firstName}</td>
                    <td style={{ width: "150px" }}>{item.lastName}</td>
                    <td style={{ width: "150px" }}>{item.gender}</td>
                    <td style={{ width: "500px" }}>{item.email}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
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
      </div>
    </>
  );
};

export default Pagination2;
