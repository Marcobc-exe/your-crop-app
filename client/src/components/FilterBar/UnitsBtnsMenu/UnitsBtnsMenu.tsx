import { Button, Grid } from "@mui/material";
import { FC, Fragment } from "react";
import { SectorType, StateUnits } from "../../../types/Sectors-types/types";
import { SectorsBtnsMenu } from "../SectorsBtnsMenu/SectorsBtnsMenu";
import { EventType } from "../../../types/ReactElements-types/types";
import usePrograms from "../../../hooks/controllers/usePrograms";
import { ArrIdUnits } from "../../../types/Units-types/types";

type UnitsBtnsMenuProps = {
  dataSectors: SectorType[];
  openMenuUnits: StateUnits[];
  handleMenuUnits: (event: EventType) => void;
};

export const UnitsBtnsMenu: FC<UnitsBtnsMenuProps> = ({
  dataSectors,
  openMenuUnits,
  handleMenuUnits,
}) => {
  // const arrIdUnits: ArrIdUnits = [3061, 3062, 3063, 3064, 3065];
  // const { dataPrograms, errorPrograms, loadingPrograms } = usePrograms(arrIdUnits);
  // console.log(dataSectors)
  return (
    <>
      {dataSectors.map((unit: SectorType[]) => {
        const numberUnit: string[] = String(unit[0].deviceId).split("");
        const stateUnitById = openMenuUnits.find(
          (item) => item.deviceId === unit[0].deviceId
        );

        return (
          <Fragment key={`Menu-${unit[0].deviceId}`}>
            <Button id={String(unit[0].deviceId)} onClick={handleMenuUnits}>
              {`LA VEGA BAJA EQ ${numberUnit[numberUnit.length - 1]} (${
                unit[0].deviceId
              })`}
            </Button>

            <Grid container direction={"column"}>
              {stateUnitById?.isOpen && <SectorsBtnsMenu unit={unit} />}
            </Grid>
          </Fragment>
        );
      })}
    </>
  );
};
