import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";

const draggableColorboxStyles = {
  root: {
    backgroundColor: ({ background }) => background,
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5.5px",

    "& button": {
      transition: "all 0.3s ease-in-out",
    },
    "&:hover button": {
      opacity: 0.75,
      transform: "scale(1.25)",
    },
  },
  boxContent: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "rgba(0,0,0,0.8)",
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    textTransform: "uppercase",
  },
  deleteButton: {
    color: ({ background }) =>
      chroma.contrast(background, "#fff") >= 2 ? "#fff" : "rgba(0,0,0,0.8)",
    padding: "0",
    backgroundColor: "transparent",
    margin: "0",
    outline: "none",
    border: "0",
    boxShadow: "none",
    cursor: "pointer",
  },
};

const DragableColorbox = SortableElement((props) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.boxContent}>
        <span>{props.name}</span>
        <button
          className={props.classes.deleteButton}
          onClick={props.handleClick}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
});

export default withStyles(draggableColorboxStyles)(DragableColorbox);
