const btnMapStyle = (filter: boolean) => {
  return {
    width: "auto",
    maxWidth: "102px",
    height: "30px",
    backgroundColor: "rgba(255, 255, 254, 1)",
    color: !filter ? "#222" : "rgba(24, 144, 185, 1)",
    border: !filter ? "2px solid #fff" : "3px solid rgba(24, 144, 185, .6)",
    borderRadius: "14px",
    ":hover": {
      backgroundColor: "rgba(245, 245, 245, 1)",
      border: !filter ? "2px solid rgba(245, 245, 245, 1)" : "3px solid rgba(24, 144, 185, .6)",
      boxShadow: "0 0 10px #222",
    },
    fontSize: "12px",
    fontWeight: filter ? 600 : 400,
    marginRight: "12px"
  };
};

const boxFilterButtons = () => {
  return {
    padding: "12px 10px",
    display: "flex",
    flexDirection: "row",
  }
}
const txtFilter = () => {
  return {
    color: "#d9d9d9",
    margin: "4px 12px 0 0",
    fontSize: "16px",
    transform: "all .4s ease-in-out",
    ":hover": {
      fontWeight: "600",
      cursor: "default"
    }
  }
}

const divDivider = () => {
  return {
    width: "1px",
    height: "30px",
    backgroundColor: "#d9d9d9",
    marginRight: "10px",
  }
}

export { btnMapStyle, boxFilterButtons, txtFilter, divDivider };
