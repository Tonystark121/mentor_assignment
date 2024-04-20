import React, { useEffect, useState } from "react";
import styles from "../styles/pagination.module.css";
import { TbChevronRightPipe } from "react-icons/tb";
import { TbChevronLeftPipe } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  rowsLengthChange,
  setTotalPages,
  moveToNextPage,
  moveToPrevPage,
} from "../redux/paginationSlice";

const pagination = ({ dummyData }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.page);
  const currPage = 1;
  const handleMoveForward = () => {
    dispatch(moveToNextPage());
  };
  const handleMoveBackward = () => {
    dispatch(moveToPrevPage());
  };
  const handleRowChange = (value) => {
    dispatch(
      rowsLengthChange({
        itemsLengthPerPage: value,
        totalItems: dummyData.length,
      })
    );
  };
  useEffect(() => {
    dispatch(setTotalPages({ totalItems: dummyData.length }));
  }, [data.rowsLength]);
  //  console.log(data.currPage, data.startIdx, data.lastIdx, data.rowsLength,data.totalPages)

  const newArr = new Array(data.totalPages).fill(null);

  const PageList = () => {
    const pagesToshow = 5;
    const pageList = [];
    let start = Math.max(1, data.currPage - 2);
    let end = Math.min(data.totalPages, start + pagesToshow - 1);
    if (end - start < pagesToshow - 1) {
      start = Math.max(1, end - pagesToshow + 1);
    }

    for (let i = start; i <= end; i++) {
      pageList.push(
        <div
          key={i}
          style={
            data.currPage === i
              ? {
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                }
              : {}
          }
        >
          {i}
        </div>
      );
    }

    return pageList;
  };

  return (
    <div className={styles.box}>
      <div className={styles.navigation}>
        <TbChevronLeftPipe className={styles.icon} />
        <button onClick={handleMoveBackward} disabled={data.currPage === 1}>
          Prev
        </button>
        <div className={styles.items}>
          {/* {newArr.map((item, idx) => (
            <div
              key={idx}
              style={
                data.currPage === idx + 1
                  ? {
                      background: "#007bff",
                      color: "#fff",
                      border: "none",
                    }
                  : {}
              }
            >
              {idx + 1}
            </div>
          ))} */}
          {PageList()}
        </div>
        <button
          onClick={handleMoveForward}
          disabled={data.currPage === data.totalPages}
        >
          Next
        </button>
        <TbChevronRightPipe className={styles.icon} />
      </div>
      <div className={styles.length}>
        <label>Rows per page</label>
        <select
          name="rows"
          id="rows"
          onChange={(e) => handleRowChange(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default pagination;
