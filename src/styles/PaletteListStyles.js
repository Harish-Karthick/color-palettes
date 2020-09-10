export default {
  paletteList: {
    height: "100vh",
    backgroundColor: "blue",
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
  },
  allPalettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};
