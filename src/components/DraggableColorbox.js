import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import draggableColorboxStyles from "../styles/DraggableColorboxStyles";

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
