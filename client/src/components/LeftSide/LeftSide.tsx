import { FC } from "react";
import { PropsMaps } from "../../data/map/map";
import "./index.css";
import { useAllMaps } from "../../features/maps/maps.hook";

type Props = {
  currentMap: PropsMaps;
  handleCurrentMap: (id: number) => void;
};

export const LeftSide: FC<Props> = ({ currentMap, handleCurrentMap }) => {
  const { data: maps, isLoading, isError, error } = useAllMaps()

  if (isLoading && JSON.stringify(currentMap) === "{}") return <p>Loading maps...</p>
  if (isError) return <p>Error: {(error as Error).message}</p>

  return (
    <div className="leftSide">
      <h3 className="h3MapTitle">Maps</h3>
      <div className="listMaps">
        {maps && maps.map((map) => {
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
