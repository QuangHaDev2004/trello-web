/* eslint-disable react/prop-types */
import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

function Card({ card }) {
  const showCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length;
  }

  return (
    <MuiCard sx={{
      cursor: "pointer",
      overflow: "unset"
    }}>
      {card?.cover &&
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
        />
      }

      <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {showCardActions() &&
        <CardActions sx={{ padding: "0 4px 8px 4px" }}>
          {!!card?.memberIds?.length &&
            <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>
          }
          {!!card?.comments?.length &&
            <Button size="small" startIcon={<CommentIcon />}>{card?.comments?.length}</Button>
          }
          {!!card?.attachments?.length &&
            <Button size="small" startIcon={<AttachmentIcon />}>{card?.attachments?.length}</Button>
          }
        </CardActions>
      }
    </MuiCard>
  )
}

export default Card