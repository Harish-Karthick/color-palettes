import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { SortableElement } from "react-sortable-hoc";
import draggableColorboxStyles from "../styles/DraggableColorboxStyles";

const DragableColorbox = SortableElement((props) => {
  const { classes, name, handleClick } = props;
  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <button className={classes.deleteButton} onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
});

export default withStyles(draggableColorboxStyles)(DragableColorbox);
