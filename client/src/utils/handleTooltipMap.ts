import { AreasProps } from "../types/Areas-types/types"
import { CropsType } from '../types/Crops-types/types.js';
import { crops } from '../constants/crops.ts';
import { capitalizeText } from '../utils/capitalize.js';
import { MarkerTooltip } from "../types/Markers-types/types.js";

export const handleTooltip = (object : AreasProps) => {
  const detailDevice: string = `${object.properties.deviceName} (${object.properties.device}) | SECTOR ${object.properties.sector}`
  const cropFound: CropsType = crops.find((crop: CropsType) => crop.cropId === object.properties.crop)

  return (
    object && {
      html: `\
        <div>
          <div>
            <b>${detailDevice}</b><br>
            <b>Crop: ${capitalizeText(cropFound.cropName)}</b>
          </div>
        </div>
      `,
      style: {
        backgroundColor: "#D9D9D9",
				color: "#5D6571",
				letterSpacing: "0.15px",
				fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
				fontWeight: 600,
				fontSize: "14px",
				width: "120px auto",
				height: "auto",
				border: "1px solid #212B36",
				borderRadius: "4px",
				lineHeight: "20px",
				padding: "9px 17px",
      }
    }
  )
}

export const handleDeviceTooltip = (info: MarkerTooltip) => {
  const values = info.layer.id.split(";")
  const deviceInfo = {
    id: Number,
    name: String,
    connected: String,
    irrigating: String,
    failure: String
  }

  values.forEach(value => {
    const info = value.split(":")
    const key = info[0]
    deviceInfo[key] = info [1]
  });

  return (
    info && {
      html: `\
        <div>
          <div>
            <b>${deviceInfo.name} | ${deviceInfo.id}</b><br>
            ${deviceInfo.connected === "true" ? `<b>Device connected</b><br>` : ""}
            ${deviceInfo.irrigating === "true" ? `<b>Irrigating!</b><br>` : ""}
            ${deviceInfo.failure === "true" ? `<b>Failure!</b><br>` : ""}
          </div>
        </div>
      `,
      style: {
        backgroundColor: "#D9D9D9",
				color: "#5D6571",
				letterSpacing: "0.15px",
				fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
				fontWeight: 600,
				fontSize: "14px",
				width: "120px auto",
				height: "auto",
				border: "1px solid #212B36",
				borderRadius: "4px",
				lineHeight: "20px",
				padding: "9px 17px",
      }
    } 
  )
}