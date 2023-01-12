import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ getPage ,pageCount}) => {


    const handlePageClick = (data) => {
        console.log(data.selected + 1)
        getPage(data.selected + 1)
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="السابق"
            // style classes
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            // previous style classes 
            //  ال page-link & page-item هي ال class الخاصة بال bootstrap
            
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            //  next style classes
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            // break style classes
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            //  active style classes
            //  ال class ده هيطبق علي العنصر اللي واقف عليه 
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
