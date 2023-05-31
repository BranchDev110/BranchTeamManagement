import "./index.css";

const RadialProgress = ({ type, value }) => {
  const dashArray = 50 * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / 100;

  const colors = {
    purple: "#8396ff",
    success: "#30d9a1",
    primary: "#2ef5f9",
  };

  return (
    <div className="radialprogress">
      <svg fill="black" style={{ width: "110px", height: "110px" }}>
        <circle
          cx={55}
          cy={55}
          fill="transparent"
          stroke="#00000010"
          strokeWidth={5}
          r={50}
        />
        <circle
          className="circle-progress"
          cx={55}
          cy={55}
          r={50}
          strokeWidth={5}
          // Start progress marker at 12 O'Clock
          fill="transparent"
          stroke={colors[type]}
          transform={`rotate(-90 55 55)`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          fontSize="16px"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          stroke="lightgray"
          fill="lightgray"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default RadialProgress;
