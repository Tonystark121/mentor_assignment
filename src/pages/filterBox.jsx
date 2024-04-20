import React from "react";
import styles from "../styles/filterBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setDate, setSize, setText, setType } from "../redux/filterSlice";

const filterBox = ({ hideFilter }) => {
  const dispatch = useDispatch();
  const handleSize = (value) => {
    dispatch(setSize({ size: value }));
  };
  const handleDate = (e) => {
    dispatch(setDate({ date: e.target.value }));
  };
  const handleType = (value) => {
    dispatch(setType({ type: value }));
  };

  const handleSubmit = () => {
    hideFilter();
  };

  const handleReset = () => {
    dispatch(setDate({ date: null }));
    dispatch(setType({ type: null }));
    dispatch(setSize({ size: null }));
    dispatch(setText({ text: "" }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.inputBox}>
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            className={styles.input}
            onChange={handleDate}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="file-type">File Type:</label>
          <select
            id="file-type"
            className={styles.input}
            onChange={(e) => handleType(e.target.value)}
          >
            <option value="pdf">pdf</option>
            <option value="csv">csv</option>
            <option value="zip">zip</option>
            <option value="srk">srk</option>
            <option value="srt">srt</option>
            <option value="excel">excel</option>
            <option value="xrt">xrt</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="file-size">File Size :</label>
          <select
            id="file-size"
            className={styles.input}
            onChange={(e) => handleSize(e.target.value)}
          >
            <option value="1">Small (&lt; 1MB)</option>
            <option value="10">Medium (1MB - 10MB)</option>
            <option value="20">Large (&gt; 10MB)</option>
          </select>
        </div>
      </div>
      <div className={styles.button}>
        <button onClick={handleSubmit}>Submit</button>
        <button style={{ background: "Red" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default filterBox;
