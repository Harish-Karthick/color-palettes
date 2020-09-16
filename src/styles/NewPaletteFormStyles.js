import { DRAWER_WIDTH } from "../utils/constants";
import mediaQuery from "../utils/mediaQueryHelper";
const drawerWidth = DRAWER_WIDTH;

export default (theme) => ({
  root: {
    display: "flex",
    [mediaQuery.down("xs")]: {
      overflow: "hidden",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: "100vh",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    marginTop: "64px",
    padding: "0",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  newColorFormContainer: {
    height: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
  buttonContainer: {
    margin: "1rem 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
});
