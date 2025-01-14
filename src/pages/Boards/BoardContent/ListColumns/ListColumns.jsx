/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns({ columns }) {
  return (
    <Box sx={{
      backgroundColor: "inherit",
      width: "100%",
      height: "100%",
      display: "flex",
      overflowX: "auto",
      overflowY: "hidden"
    }}>
      {columns?.map(column => (
        <Column key={column._id} column={column} />
      ))}

      {/* Box add new column */}
      <Box sx={{
        minWidth: "200px",
        maxWidth: "200px",
        marginX: 2,
        backgroundColor: '#ffffff3d',
        borderRadius: "6px",
        height: "fit-content",
      }}>
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: '#fff',
            width: '100%',
            justifyContent: 'flex-start',
            paddingLeft: 2.5,
            paddingY: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns