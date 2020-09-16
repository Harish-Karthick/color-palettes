import chroma from "chroma-js";
import mediaQuery from "../utils/mediaQueryHelper";
export default {
  colorBox: {
    height: ({ showingAllColors }) => (showingAllColors ? "25%" : "50%"),
    backgroundColor: ({ background }) =>
      background !== undefined ? background : "#000",
    width: "20%",
    display: "inline-block",
    margin: "0 auto -0.25rem",
    position: "relative",
    cursor: "pointer",
    "&:hover button": {
      opacity: 1,
    },
    [mediaQuery.down("lg")]: {
      width: "25%",
      height: ({ showingAllColors }) => (showingAllColors ? "20%" : "33.3333%"),
    },
    [mediaQuery.down("md")]: {
      width: "50%",
      height: ({ showingAllColors }) => (showingAllColors ? "10%" : "20%"),
    },
    [mediaQuery.down("xs")]: {
      width: "100%",
      height: ({ showingAllColors }) => (showingAllColors ? "5%" : "10%"),
    },
  },
  colorName: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "#121212",
    position: "absolute",
    bottom: "0.25rem",
    textTransform: "uppercase",
    fontSize: "1.125rem",
    left: "0.5rem",
  },
  copyButton: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "#121212",
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
    opacity: 0,
  },
  seeMore: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "#121212",
    display: "inline-block",
    textTransform: "uppercase",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: "0.25em 0.5em",
    position: "absolute",
    bottom: "0",
    right: "0",
  },
  messageTitle: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2
        ? "#fff"
        : "rgba(100, 100, 100, 1)",
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    margin: 0,
    padding: "1.25rem",
    fontSize: "4rem",
    textTransform: "uppercase",
    fontWeight: "300",
    [mediaQuery.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  messageColor: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2
        ? "#fff"
        : "rgba(100, 100, 100, 1)",
    fontSize: "1.25rem",
    margin: "0.75rem 0 0",
    textTransform: "uppercase",
    [mediaQuery.down("xs")]: {
      fontSize: "1rem",
    },
  },
  copyOverlay: {
    backgroundColor: ({ background }) => background,
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showCopyOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "0",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
  },
  showCopyMessage: {
    opacity: "1",
    zIndex: "15",
    transition: "0.2s opacity ease-in-out",
    transitionDelay: "0.6s",
  },
};
