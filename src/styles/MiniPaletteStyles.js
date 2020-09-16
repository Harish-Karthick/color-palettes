export default {
  root: {
    backgroundColor: "#fff",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover button": {
      opacity: "1",
    },
    "&:hover svg": {
      fill: "#fff",
    },
  },
  colors: {
    height: "150px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    margin: "0",
    paddingTop: "o.5rem",
  },
  emoji: {
    fontSize: "1.5rem",
    marginLeft: "0.5rem",
  },
  miniColor: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto -3.5px",
    position: "relative",
  },
  deleteButton: {
    backgroundColor: "#ff5252",
    border: "0",
    padding: "0.5rem",
    position: "absolute",
    zIndex: "10",
    top: "0",
    right: "0",
    opacity: "0",
    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  deleteIcon: {
    fill: "none",
  },
};
