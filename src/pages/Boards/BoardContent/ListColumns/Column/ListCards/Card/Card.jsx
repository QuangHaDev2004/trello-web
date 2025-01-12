import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

function Card() {
  return (
    <MuiCard sx={{
      cursor: "pointer",
      overflow: "unset"
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.hdqwalls.com/download/illustrator-planet-ai-art-4k-84-1920x1080.jpg"
        title="green iguana"
      />
      <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
        <Typography>Card 1</Typography>
      </CardContent>
      <CardActions sx={{ padding: "0 4px 8px 4px" }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>35</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>40</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card