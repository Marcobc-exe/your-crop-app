import { Button, Grid } from "@mui/material";
import { SectorType } from "../../../types/Sectors-types/types";
import { FC } from "react";
// import { ArrIdUnits } from "../../../types/Units-types/types";
// import usePrograms from '../../../hooks/controllers/usePrograms'

type SectorsBtnsMenuProps = {
  unit: SectorType[];
}

export const SectorsBtnsMenu: FC<SectorsBtnsMenuProps> = ({ unit }) => {
  // const arrIdUnits: ArrIdUnits = [3061, 3062, 3063, 3064, 3065];
  // const { dataPrograms } = usePrograms(arrIdUnits);

  // console.log(dataPrograms)

  return (
    <>
      {unit.map((sector: SectorType) => (
        <Grid item key={`${sector.deviceId}-${sector.id}`}>
          <Button
            id={String(unit[0].deviceId)}
            // onClick={handleClose}
          >
            {sector.name} - {sector.deviceId}
          </Button>
        </Grid>
      ))}
    </>
  );
};
