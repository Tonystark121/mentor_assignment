import React, { useState } from "react";
import styles from "../styles/home.module.css";
import Pagination from "./pagination";
import { IoSearchOutline } from "react-icons/io5";
import { TbFilter } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { PiFileArrowDownDuotone } from "react-icons/pi";

const Nav = ({ showFilterBox, hideFilterBox }) => {
  return (
    <nav>
      <ul>
        <div className={styles.searchBox}>
          <input type="text" placeholder="search files..." />
          <IoSearchOutline className={styles.icon} />
        </div>
        <h3>Recently Generated Posts</h3>
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
          {showFilterBox && <div className={styles.filterBox}></div>}
          <div className={styles.main}>
            <table>
              <tr className={styles.heading}>
                <th>Date</th>
                <th>Report Name</th>
                <th>Download</th>
              </tr>
              {dummyData.map((item, idx) => (
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
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default home;
