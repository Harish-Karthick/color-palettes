import { DRAWER_WIDTH } from "../utils/constants";
const drawerWidth = DRAWER_WIDTH;

export default (theme) => ({
  appBar: {
    display: "flex",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navbarText: {
    display: "flex",
    alignItems: "center",
  },
  navbarForm: {
    display: "flex",
    "& button": {
      marginLeft: theme.spacing(2),
    },
  },
  goBackButton: {
    textDecoration: "none",
  },
});
