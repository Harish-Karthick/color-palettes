import mediaQuery from "../utils/mediaQueryHelper";
export default {
  inputSlider: {
    WebkitAppearance: "none",
    marginTop: 3,
    maxWidth: "300px",
    width: "80%",
    display: "inline-block",
    "&:focus": {
      outline: "none",
    },
    "&::-webkit-slider-runnable-track": {
      width: "100%",
      height: 6,
      cursor: "pointer",
      boxShadow: "0px 0px 0px #000000, 0px 0px 0px #0d0d0d",
      background: "rgba(210, 210, 210)",
      border: "0px solid #000101",
    },
    "&::-webkit-slider-thumb": {
      border: "0px solid #000000",
      height: 12,
      width: 12,
      borderRadius: "50%",
      background: "#109ac4",
      cursor: "pointer",
      WebkitAppearance: "none",
      marginTop: "-3px",
    },
    "&:focus::-webkit-slider-runnable-track": {
      background: "rgba(210, 210, 210)",
    },
    "&::-moz-range-track": {
      width: "100%",
      height: 6,
      cursor: "pointer",
      boxShadow: "0px 0px 0px #000000, 0px 0px 0px #0d0d0d",
      background: "rgba(210, 210, 210)",
      border: "0px solid #000101",
    },
    "&::-moz-range-thumb": {
      border: "0px solid #000000",
      height: 12,
      width: 12,
      borderRadius: "50%",
      background: "#109ac4",
      cursor: "pointer",
    },
    "&::-ms-track": {
      width: "100%",
      height: 6,
      cursor: "pointer",
      background: "transparent",
      borderColor: "transparent",
      borderWidth: "39px 0",
      color: "transparent",
    },
    "&::-ms-fill-lower": {
      background: "rgba(210, 210, 210)",
      border: "0px solid #000101",
      borderRadius: 50,
      boxShadow: "0px 0px 0px #000000, 0px 0px 0px #0d0d0d",
    },
    "&::-ms-fill-upper": {
      background: "rgba(210, 210, 210)",
      border: "0px solid #000101",
      borderRadius: 50,
      boxShadow: "0px 0px 0px #000000, 0px 0px 0px #0d0d0d",
    },
    "&::-ms-thumb": {
      border: "0px solid #000000",
      height: 12,
      width: 12,
      borderRadius: "50%",
      background: "#109ac4",
      cursor: "pointer",
    },
    "&:focus::-ms-fill-lower": {
      background: "rgba(210, 210, 210)",
    },
    "&:focus::-ms-fill-upper": {
      background: "rgba(210, 210, 210)",
    },
    [mediaQuery.down("lg")]: {
      width: "200px",
    },
    [mediaQuery.down("md")]: {
      width: "150px",
    },
    [mediaQuery.down("md")]: {
      width: "125px",
    },
  },
};
