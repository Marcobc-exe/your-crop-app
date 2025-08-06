import { maps } from "../../data/map/map";
import "./index.css";

export const LeftSide = () => {
  return (
    <div className="leftSide">
      <h3>Maps</h3>
      <div className="listMaps">
        {maps.map((map, key) => (
          <button key={map.id} className="btnMapName">
            {map.name}
          </button>
        ))}
      </div>
    </div>
  );
};
