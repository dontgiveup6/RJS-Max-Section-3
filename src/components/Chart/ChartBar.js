import { useState } from "react";
import "./ChartBar.css";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  const [valueStyles, setValueStyles] = useState("chart-bar__value");
  const [chartBar, setChartBarStyles] = useState("chart-bar");

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  const mouseOverHandler = () => {
    setTimeout(() => {
      setValueStyles("chart-bar__value chart-bar__value-visible");
      if (value > 0) {
        setChartBarStyles("chart-bar chart-bar__hover");
      }
    }, 100);
  };

  const mouseOutHandler = () => {
    setTimeout(() => {
      setValueStyles("chart-bar__value");
      setChartBarStyles("chart-bar");
    }, 100);
  };

  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      className={chartBar}
    >
      <div className={valueStyles}>{value > 0 && `$${value}`}</div>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
