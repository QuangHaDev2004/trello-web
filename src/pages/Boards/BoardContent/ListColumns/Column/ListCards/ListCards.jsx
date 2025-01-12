import { Box } from "@mui/material"
import Card from "./Card/Card"

function ListCards() {
  return (
    <Box sx={{
      padding: "0 5px",
      margin: "0 5px",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} - 
      ${theme.trello.columnHeaderHeight} - 
      ${theme.trello.columnFooterHeight}) `,
      '&::-webkit-scrollbar-thumb': { backgroundColor: "#cde0da", },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: "#bfc2cf" }
    }}>
      <Card />
    </Box>
  )
}

export default ListCards