import { FC } from "react";
import { maps, PropsMaps } from "../../data/map/map";
import "./index.css";

type Props = {
  currentMap: PropsMaps;
  handleCurrentMap: (id: string) => void;
};

export const LeftSide: FC<Props> = ({ currentMap, handleCurrentMap }) => {
  return (
    <div className="leftSide">
      <h3 className="h3MapTitle">Maps</h3>
      <div className="listMaps">
        {maps.map((map) => {
          const disabled = currentMap.id === map.id ? true : false;
          return (
            <button
              key={map.id}
              className={`btnMapName ${disabled}`}
              onClick={() => handleCurrentMap(map.id)}
              style={{ cursor: disabled ? "default" : "pointer" }}
              disabled={disabled}
            >
              {map.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
