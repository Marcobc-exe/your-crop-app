import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2f3542",
    color: "rgba(255, 255, 255, 0.7)",
    maxWidth: 120,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    position: "relative",
    top: "-30px",
  },
}));
