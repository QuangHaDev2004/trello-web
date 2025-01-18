/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "../../../utils/sorts";
import { DndContext, PointerSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD"
}

function BoardContent({ board }) {
  const poiterSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
  const sensors = useSensors(poiterSensor);

  const [orderedColumnStates, setOrderedColumnStates] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id');
    setOrderedColumnStates(orderedColumns);
  }, [board]);

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN);
    setActiveDragItemData(event?.active?.data?.current);
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      // Lấy vị trí cũ từ thằng active
      const oldIndex = orderedColumnStates.findIndex(c => c._id === active.id);
      // Lấy vị trí mới từ thằng over
      const newIndex = orderedColumnStates.findIndex(c => c._id === over.id);

      const dndOrderedColumns = arrayMove(orderedColumnStates, oldIndex, newIndex);
      setOrderedColumnStates(dndOrderedColumns);
    }

    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5"
        }
      }
    })
  }

  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
            width: "100%",
            height: (theme) => theme.trello.boardContentHeight,
            padding: "10px 0",
          }}
        >
          <ListColumns columns={orderedColumnStates} />
          <DragOverlay dropAnimation={dropAnimation}>
            {!activeDragItemType && null}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
          </DragOverlay>
        </Box>
      </DndContext>
    </>
  );
}

export default BoardContent;
