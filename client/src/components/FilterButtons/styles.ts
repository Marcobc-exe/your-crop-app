export const btnMapStyle = (filter: boolean) => {
  return {
    height: "30px",
    backgroundColor: "rgba(255, 255, 254, 1)",
    color: !filter ? "#222" : "rgba(24, 144, 185, 1)",
    border: !filter ? "1px solid #fff" : "1px solid rgba(24, 144, 185, .6)",
    borderRadius: "14px",
    fontSize: "12px",
    marginRight: "12px",
    paddingInline: "12px",
    alignContent: "center",
    cursor: "pointer",
  };
};

export const boxFilterButtons = () => {
  return {
    padding: "12px 10px",
    display: "flex",
    flexDirection: "row",
  };
};

export const txtFilter = () => {
  return {
    color: "#d9d9d9",
    fontSize: "14px",
    transform: "all .4s ease-in-out",
    margin: "4px 12px 0 0",
  };
};

export const divDivider = () => {
  return {
    width: "1px",
    height: "30px",
    backgroundColor: "#d9d9d9",
    marginRight: "10px",
    opacity: '.6'
  };
};
