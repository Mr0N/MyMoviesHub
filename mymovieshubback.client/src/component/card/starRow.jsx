import React from "react";

let Star = ({ fill = "#C8B414", x = 0 }) => (
  <g transform={`translate(${x})`}>
    <path
      d="m15.843 11.697 4.295-3.541c.608-.503.294-1.488-.502-1.53l-5.532-.335a.87.87 0 0 1-.754-.545L11.317.55a.867.867 0 0 0-1.613 0L7.67 5.725a.87.87 0 0 1-.754.545l-5.553.335c-.796.042-1.11 1.027-.502 1.53l4.295 3.52c.251.21.377.566.293.88L4.046 17.92a.863.863 0 0 0 1.3.943l4.672-2.996a.82.82 0 0 1 .922 0l4.694 2.996a.863.863 0 0 0 1.299-.943l-1.404-5.364a.86.86 0 0 1 .314-.859"
      fill={fill}
    />
  </g>
);
let StarsRow = ({ count = 10, value = 7 }) => {
  const starWidth = 21;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={starWidth * count} height="19" viewBox={`0 0 ${starWidth * count} 19`}>
      {[...Array(count)].map((_, i) => (
        <Star
          key={i}
          x={i * starWidth}
          fill={i < value ? "#FFD700" : "#E0E0E0"}
        />
      ))}
    </svg>
  );
};
export default StarsRow;

