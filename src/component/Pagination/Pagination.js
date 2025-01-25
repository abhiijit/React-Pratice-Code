import React, { useEffect, useState } from 'react'
import './Pagination.css'

const Pagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const fetchProduct = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const result = await res.json();
        if (result && result.products)
            setData(result.products)
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    const selectedPagination = (selectedPage) => {
        if(selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page)
        setPage(selectedPage)
    }
    return (
        <>
            {data.length > 0 && (
                <div className='products'  >
                    {data.slice(page * 10 - 10, page * 10).map((item) => {
                        return (
                            <>
                                <span className='products__single' key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} />
                                    <span>{item.title}</span>
                                </span>
                            </>
                        )
                    })}
                </div>
            )}
            {data.length > 0 && <div className='pagination'>
                <span onClick={() => selectedPagination(page - 1)}
                className={page > 1 ? "" : "pagination__disable"}>◀️</span>
                {[...Array(data.length / 10)].map((_, index) => {
                    return (
                        <>
                            <span className={page === index + 1 ? 'pagination__selected' : ""} onClick={() => selectedPagination(index + 1)} key={index}>{index + 1}</span>
                        </>
                    )
                })}
                <span onClick={() => selectedPagination(page + 1)}
                className={page < data.length / 10 ? "" : "pagination__disable"}>▶️</span>
            </div>}
        </>
    )
}

export default Pagination