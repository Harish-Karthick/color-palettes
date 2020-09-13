const drawerWidth = 400;
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
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    "& form": {
      display: "flex",
      alignItems: "center",
    },
    "& button": {
      marginLeft: "0.5rem",
    },
  },
  goBackButton: {
    textDecoration: "none",
  },
});
