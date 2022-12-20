import React from "react";
import ReactPaginate from "react-paginate";
import {useSelector } from "react-redux";
import { StyledPaginateContainer } from "./style";


export const Pagination = ({ handlePageClick, count }: any) => {


    return (
        <>
            <StyledPaginateContainer >
                <ReactPaginate
                    className="pagination "
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={6}
                    pageCount={Math.ceil(count / 20)}
                    previousLabel="<"
                />
            </StyledPaginateContainer>
        </>
    );
};