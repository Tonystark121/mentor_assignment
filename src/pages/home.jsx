import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import Pagination from "./pagination";
import { IoSearchOutline } from "react-icons/io5";
import { TbFilter } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { PiFileArrowDownDuotone } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actionSlice";
import FilterBox from "./filterBox";
import { setText } from "../redux/filterSlice";
import { setTotalPages } from "../redux/paginationSlice";

const Nav = ({ showFilterBox, hideFilterBox }) => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    console.log(e.target.value);
    dispatch(setText({ text: e.target.value }));
  };
  return (
    <nav>
      <ul>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="search files..."
            onChange={handleSearch}
          />
          <IoSearchOutline className={styles.icon} />
        </div>
        <h3>Recently Generated Reports</h3>
        <div className={styles.filter}>
          <div onClick={showFilterBox}>
            <TbFilter />
          </div>
          <div onClick={hideFilterBox}>
            <RxCross1 />
          </div>
        </div>
      </ul>
    </nav>
  );
};

const home = () => {
  const [showFilterBox, setShowFilterBox] = useState(false);
  const showFilter = () => {
    setShowFilterBox(true);
  };
  const hideFilter = () => {
    setShowFilterBox(false);
  };
  const { startIdx, lastIdx } = useSelector((state) => state.page);
  const result = useSelector((state) => state.app);
  const { size, type, text, date } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  console.log(text,size, type,date)

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // I have written the logic for filtering, but not able to filter data beacasue do not find related api.

  return (
    <div className={styles.parent}>
      <div className={styles.box}>
        <Nav showFilterBox={showFilter} hideFilterBox={hideFilter} />
        <div className={styles.details}>
          {showFilterBox && <FilterBox hideFilter={hideFilter} />}
          <div className={styles.main}>
            <table>
              <tr className={styles.heading}>
                <th>Date</th>
                <th>Report Name</th>
                <th>Download</th>
              </tr>
              {result.data.length >= 1 &&
                result.data
                  ?.filter((items) =>
                    items.title
                      .toLowerCase()
                      .includes(text.length ? text.toLowerCase() : "") 
                      // &&
                      // (date === null  || items.date === date) &&
                      // (size === null || items.size === size) && 
                      // (type === null || items.type === type)
                  )
                  .slice(startIdx, lastIdx)
                  .map((item, idx) => (
                    <tr key={idx}>
                      <td>{`${item.id % 31} Mar 2024`}</td>
                      <td>{item.title.slice(0, 12)}</td>
                      <td>
                        <div>
                          <PiFileArrowDownDuotone className={styles.download} />
                        </div>
                      </td>
                    </tr>
                  ))}
              {!result.data.length && <h1>Loading...</h1>}
            </table>
          </div>
          <Pagination dummyData={result.data} />
        </div>
      </div>
    </div>
  );
};

export default home;
