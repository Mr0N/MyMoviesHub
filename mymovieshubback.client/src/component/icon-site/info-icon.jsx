import * as React from "react";
let InfoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={10} stroke="white" strokeWidth={2} />
    <rect x={19} y={17} width={2} height={8} fill="white" />
    <circle cx={20} cy={14} r={1.5} fill="white" />
  </svg>
);
export default InfoIcon;
