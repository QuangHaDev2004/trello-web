/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "../../../utils/sorts";
import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

function BoardContent({ board }) {
  const poiterSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
  const sensors = useSensors(poiterSensor);

  const [orderedColumnStates, setOrderedColumnStates] = useState([]);

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id');
    setOrderedColumnStates(orderedColumns);
  }, [board]);

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
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
            width: "100%",
            height: (theme) => theme.trello.boardContentHeight,
            padding: "10px 0",
          }}
        >
          <ListColumns columns={orderedColumnStates} />
        </Box>
      </DndContext>
    </>
  );
}

export default BoardContent;
