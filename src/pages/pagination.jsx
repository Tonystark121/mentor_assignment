import React from "react";
import styles from "../styles/pagination.module.css";
import { TbChevronRightPipe } from "react-icons/tb";
import { TbChevronLeftPipe } from "react-icons/tb";
const pagination = () => {
  return (
    <div className={styles.box}>
      <div className={styles.navigation}>
        <TbChevronLeftPipe className={styles.icon} />
        <button>Prev</button>
        <div className={styles.items}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <button>Next</button>
        <TbChevronRightPipe className={styles.icon} />
      </div>
      <div className={styles.length}>
         <label for='rows'>Rows per page</label>
         <select name="rows" id="rows">
           <option value="5">5</option>
           <option value="5">10</option>
           <option value="5">20</option>
           <option value="5">50</option>
           <option value="5">100</option>
         </select>
      </div>
    </div>
  );
};

export default pagination;
