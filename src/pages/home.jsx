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

const Nav = ({ showFilterBox, hideFilterBox }) => {
   const dispatch = useDispatch()
   const handleSearch = (e) => {
      dispatch(setText({text:e.target.value}))
   }
  return (
    <nav>
      <ul>
        <div className={styles.searchBox}>
          <input type="text" placeholder="search files..." onClick={handleSearch} />
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
    console.log("filter");
    setShowFilterBox(true);
  };
  const hideFilter = () => {
    console.log("Hide filter");
    setShowFilterBox(false);
  };
  const { startIdx, lastIdx } = useSelector((state) => state.page);
  const data = useSelector((state) => state.app);
  const {size, type, text, date} = useSelector(state => state.filter)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(size, type, text,date)
  const dummyData = [
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
    {
      date: "23-May-2024",
      report: "Report_on_the_Bridge.csv",
    },
  ];
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
              {dummyData.slice(startIdx, lastIdx).map((item, idx) => (
                <tr key={idx}>
                  <td>{item.date}</td>
                  <td>{item.report}</td>
                  <td>
                    <div>
                      <PiFileArrowDownDuotone className={styles.download} />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <Pagination dummyData={dummyData} />
        </div>
      </div>
    </div>
  );
};

export default home;
