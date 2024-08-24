import satData from "./satData"
import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {displaySats.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit
          </button>
  );
})}
      <button onClick={() => setSat(satData)}>
         All Orbits
      </button>
    </div>
  );
};

export default Buttons;