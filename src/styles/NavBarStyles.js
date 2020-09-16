import mediaQuery from "../utils/mediaQueryHelper";
export default {
  header: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "lowercase",
    color: "rgba(0, 0, 0, 1)",
    transition: "0.2s all ease-in-out",
    padding: "0.5em 1.5em",
    backgroundColor: "rgb(230, 230, 230)",
    fontSize: "1.5rem",
    "&:hover": {
      opacity: 0.8,
    },
    [mediaQuery.down("xs")]: {
      display: ({ showSlider }) => (showSlider ? "none" : "inline-flex"),
      padding: "0.5em 1em",
    },
  },
  navLinkText: {
    marginLeft: "0.75rem",
  },
  sliderContainer: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
  sliderLabel: {
    margin: "0 1rem",
    fontWeight: 600,
  },
  selectContainer: {
    flexGrow: 1,
    display: "inline-block",
    maxWidth: 250,
    marginRight: "1rem",
    marginLeft: "auto",
    [mediaQuery.down("xs")]: {
      marginRight: 0,
    },
  },
  selectInput: {
    width: "100%",
    maxWidth: "250px",
  },
};
