import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorbox from "./DraggableColorbox";

const DraggableColorList = SortableContainer((props) => {
  return (
    <div style={{ height: "100%" }}>
      {props.allColors.map((color, index) => (
        <DraggableColorbox
          index={index}
          key={color.name}
          background={color.color}
          name={color.name}
          handleClick={() => props.deleteColor(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
