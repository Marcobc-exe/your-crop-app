import { AreasProps } from "../types/Areas-types/types"

export const handleTooltip = (object : AreasProps) => {
  const detailDevice: string = `${object.properties.deviceName} (${object.properties.device}) | SECTOR ${object.properties.sector}`

  return (
    object && {
      html: `\
        <div>
          <div>
            <b>${detailDevice}</b>
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