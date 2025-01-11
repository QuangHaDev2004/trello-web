import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Divider, ListItemIcon,
  ListItemText, Menu, MenuItem, Tooltip, Typography
} from "@mui/material";
import ContentCut from '@mui/icons-material/ContentCut';
import Cloud from '@mui/icons-material/Cloud';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

const COLUMN_HEADER_HEIGHT = "50px";
const COLUMN_FOOTER_HEIGHT = "56px";

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          padding: "10px 0",
        }}
      >
        <Box sx={{
          backgroundColor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden"
        }}>
          {/* Box Column */}
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              backgroundColor: (theme) => theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              marginLeft: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
            }}
          >
            {/* Box Column Header */}
            <Box
              sx={{
                height: COLUMN_HEADER_HEIGHT,
                padding: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{
                fontSize: "1rem",
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>Column Title</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="More options">
                  <ExpandMoreIcon
                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                    id="basic-column-dropdown"
                    aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-column-dropdown",
                  }}
                >
                  <MenuItem>
                    <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            {/* Box List Cart */}
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
            ${COLUMN_HEADER_HEIGHT} - 
            ${COLUMN_FOOTER_HEIGHT}) `,
              '&::-webkit-scrollbar-thumb': { backgroundColor: "#cde0da", },
              '&::-webkit-scrollbar-thumb:hover': { backgroundColor: "#bfc2cf" }
            }}>
              <Card sx={{
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
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Box Column Footer */}
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                padding: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add new card</Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
          </Box>

          {/* Box Column 02 */}
          <Box
            sx={{
              minWidth: "300px",
              maxWidth: "300px",
              backgroundColor: (theme) => theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
              marginLeft: 2,
              borderRadius: "6px",
              height: "fit-content",
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
            }}
          >
            {/* Box Column Header */}
            <Box
              sx={{
                height: COLUMN_HEADER_HEIGHT,
                padding: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{
                fontSize: "1rem",
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>Column Title</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="More options">
                  <ExpandMoreIcon
                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                    id="basic-column-dropdown"
                    aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                </Tooltip>
                <Menu
                  id="basic-menu-column-dropdown"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-column-dropdown",
                  }}
                >
                  <MenuItem>
                    <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                    <ListItemText>Remove this column</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                    <ListItemText>Archive this column</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            {/* Box List Cart */}
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
            ${COLUMN_HEADER_HEIGHT} - 
            ${COLUMN_FOOTER_HEIGHT}) `,
              '&::-webkit-scrollbar-thumb': { backgroundColor: "#cde0da", },
              '&::-webkit-scrollbar-thumb:hover': { backgroundColor: "#bfc2cf" }
            }}>
              <Card sx={{
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
              </Card>
              <Card sx={{
                cursor: "pointer",
                overflow: "unset"
              }}>
                <CardContent sx={{ padding: 1.5, '&:last-child': { padding: 1.5 } }}>
                  <Typography>Card 2</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Box Column Footer */}
            <Box
              sx={{
                height: COLUMN_FOOTER_HEIGHT,
                padding: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button startIcon={<AddCardIcon />}>Add new card</Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BoardContent;
