import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
  color: '#fff',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: '#fff'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        overflowX: "auto",
        overflowY: "hidden"
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            sx={MENU_STYLES}
            icon={<SpaceDashboardIcon />}
            label="Trello Board"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<AddToDriveIcon />}
            label="Add To Google Drive"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<BoltIcon />}
            label="Automation"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<FilterListIcon />}
            label="Filters"
            clickable
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<PersonAddIcon />}
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': { borderColor: '#ddd' }
            }}
          >Invite
          </Button>
          <AvatarGroup
            max={7}
            sx={{
              gap: '10px',
              '& .MuiAvatar-root': {
                width: '34px',
                height: '34px',
                fontSize: '16px',
                border: 'none'
              }
            }}
          >
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.9_MptOLxjJEGSGukPt9FWQHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.FZPwy2a4714RejChdfNfgwHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.EwG6x9w6RngqsKrPJYxULAHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.flezYPEx3QN5Tgk1LkdHuAHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.9IKFN9BRInD8TURd94OY6wHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse2.mm.bing.net/th?id=OIP.x7X2oAehk5M9IvGwO_K0PgHaHa&pid=Api&P=0&h=180" />
            </Tooltip>

            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.9_MptOLxjJEGSGukPt9FWQHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.srNFFzORAaERcWvhwgPzVAHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse4.mm.bing.net/th?id=OIP.FZPwy2a4714RejChdfNfgwHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.EwG6x9w6RngqsKrPJYxULAHaHa&pid=Api&P=0&h=180" />
            </Tooltip>
            <Tooltip title='user'>
              <Avatar alt="Remy Sharp" src="https://tse3.mm.bing.net/th?id=OIP.flezYPEx3QN5Tgk1LkdHuAHaHa&pid=Api&P=0&h=180" />
            </Tooltip>

          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar;
