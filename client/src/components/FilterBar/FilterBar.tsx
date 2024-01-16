import { Box } from "@mui/material";
import "./index.css";
import useSectors from "../../hooks/controllers/useSectors";
import { ArrIdUnits } from "../../types/Units-types/types";
import {
  SectorType,
  StateUnits,
} from "../../types/Sectors-types/types";
import { Dispatch, SetStateAction, Suspense, useState } from "react";
import { EventType } from "../../types/ReactElements-types/types";
import { UnitsBtnsMenu } from "./UnitsBtnsMenu/UnitsBtnsMenu";
// import usePrograms from "../../hooks/controllers/usePrograms";

export const FilterBar = () => {
  const arrIdUnits: ArrIdUnits = [3061, 3062, 3063, 3064, 3065];
  const { dataSectors, errorSectors, loadingSectors } = useSectors(arrIdUnits);

  if (loadingSectors) {
    console.log(loadingSectors);
  }

  if (errorSectors) {
    console.log(errorSectors);
  }

  const arrUnitStates = dataSectors.map((unit: SectorType[]) => {
    return {
      deviceId: unit[0].deviceId,
      isOpen: false,
    };
  });

  const [openMenuUnits, setOpenMenuUnits]: [StateUnits[], Dispatch<SetStateAction<StateUnits[]>>] = useState(arrUnitStates);

  const handleMenuUnits = (event: EventType) => {
    const deviceId: number = Number(event.currentTarget.id);

    setOpenMenuUnits((prevState) => {
      const newState = prevState.map((unit: StateUnits) => {
        if (unit.deviceId === deviceId) {
          return {
            ...unit,
            isOpen: !unit.isOpen,
          };
        }
        return unit;
      });

      return newState;
    });
  };

  return (
    <Box className="containerFilterBar">
      <p className="titleFilterBar">Units | La Vega Baja</p>
      <Suspense fallback={<h3>Loading sectors info...</h3>}>
        <UnitsBtnsMenu
          dataSectors={dataSectors}
          openMenuUnits={openMenuUnits}
          handleMenuUnits={handleMenuUnits}
        />
      </Suspense>
    </Box>
  );
};
