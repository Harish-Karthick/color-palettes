import mediaQuery from "../utils/mediaQueryHelper";
export default {
  paletteView: {
    height: "100vh",
    overflow: "hidden",
  },
  colorsContainer: {
    height: "calc(100vh - 5vh - 56px)",
  },
  backBox: {
    display: "inline-block",
    margin: "0 auto -0.25rem",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 1)",
    height: "50%",
    width: "20%",
    [mediaQuery.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [mediaQuery.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [mediaQuery.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
  backButton: {
    color: "#ffffff",
    display: "inline-block",
    fontSize: "1rem",
    padding: "0.5em 1.5em",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: 0,
    border: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    transition: "0.5s opacity cubic-bezier(0.19, 1, 0.22, 1)",
    textDecoration: "none",
  },
};
