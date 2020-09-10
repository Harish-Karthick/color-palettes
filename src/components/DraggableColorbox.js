import React from "react";
import { withStyles } from "@material-ui/core/styles";

const draggableColorboxStyles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    backgroundColor: (props) => props.background,
  },
};

function DragableColorbox(props) {
  return <div className={props.classes.root}>{props.background}</div>;
}

export default withStyles(draggableColorboxStyles)(DragableColorbox);
