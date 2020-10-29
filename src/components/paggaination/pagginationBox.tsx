import React from "react";
import Button from "../button/button";
import { pages } from "./hellpers";

import "./paggination.css";

import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

const PagginationBox = ({ page, total_pages, setPage, showNeighbors = 4 }) => {
  const all_pages = pages(page, showNeighbors, total_pages);
  const className = "pagginationBox";
  const fastBack = page > showNeighbors;
  const fastForward = page < total_pages - showNeighbors;
  return (
    <div className={className}>
      {fastBack ? (
        <CgChevronDoubleLeft
          onClick={() => {
            setPage(1);
          }}
          className="icon"
        />
      ) : null}

      {all_pages.map((pageNumber) => (
        <Page
          {...{
            setPage,
            pageNumber,
            activePage: page,
            showNeighbors,
            total_pages,
          }}
          key={pageNumber}
        />
      ))}

      {fastForward ? (
        <CgChevronDoubleRight
          onClick={() => {
            setPage(total_pages);
          }}
          className="icon"
        />
      ) : null}
    </div>
  );
};

const Page = ({
  setPage,
  pageNumber,
  activePage,
  total_pages,
  showNeighbors,
}) => {
  const onClick = () => {
    setPage(pageNumber);
  };

  const isRigthNeighbor = pageNumber < activePage + showNeighbors;
  const isLeftNeighbor = pageNumber > activePage - showNeighbors;

  const renderCondition = isLeftNeighbor && isRigthNeighbor;
  const className = activePage === pageNumber ? "activePageP" : "pageP";

  return renderCondition ? (
    <div className={className} onClick={onClick}>
      {pageNumber}
    </div>
  ) : null;
};

export default PagginationBox;
