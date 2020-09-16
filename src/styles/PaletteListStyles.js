import mediaQuery from "../utils/mediaQueryHelper";
import bg from "../assets/images/bg.svg";
export default {
  paletteList: {
    minHeight: "100vh",
    backgroundColor: "#330033",
    backgroundImage: `url(${bg})`,
    overflow: "auto",
    // background by SVGBackgrounds.com
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    "& h1": {
      color: "#fff",
      margin: "1rem 0",
    },
    "& a": {
      textDecoration: "none",
      color: "#fff",
      transition: "all 0.2s ease",
      "&:hover": {
        opacity: "0.75",
      },
    },
  },
  container: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    [mediaQuery.down("lg")]: {
      width: "80%",
    },
    [mediaQuery.down("md")]: {
      width: "90%",
    },
  },
  allPalettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
    [mediaQuery.down("md")]: {
      gridTemplateColumns: "repeat(2 , 1fr)",
    },
    [mediaQuery.down("sm")]: {
      gridTemplateColumns: "repeat(1 , 1fr)",
      gridGap: "1.5rem",
    },
  },
};
