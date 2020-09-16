import chroma from "chroma-js";
import mediaQuery from "../utils/mediaQueryHelper";

export default {
  root: {
    backgroundColor: ({ background }) => background,
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5.5px",

    "& button": {
      transition: "all 0.3s ease-in-out",
    },
    "&:hover button": {
      opacity: 0.75,
      transform: "scale(1.25)",
    },
    [mediaQuery.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [mediaQuery.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [mediaQuery.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "rgba(0,0,0,0.8)",
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    textTransform: "uppercase",
  },
  deleteButton: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "rgba(0,0,0,0.8)",
    padding: "0",
    backgroundColor: "transparent",
    margin: "0",
    outline: "none",
    border: "0",
    boxShadow: "none",
    cursor: "pointer",
  },
};
